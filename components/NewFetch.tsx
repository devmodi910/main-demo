'use client';

import { useState } from 'react';

interface LighthouseCategory {
  title: string;
  score: number;
}

interface LighthouseReport {
  finalUrl: string;
  categories: Record<string, LighthouseCategory>;
  audits: Record<string, unknown>;
}

export default function Home() {
  const [url, setUrl] = useState<string>('');
  const [report, setReport] = useState<LighthouseReport | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchLighthouseData = async () => {
    if (!url) {
      setError('Please enter a valid URL');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/lighthouse?url=${encodeURIComponent(url)}`);
      const data: LighthouseReport = await response.json();

      if (response.ok) {
        setReport(data);
      } else {
        setError((data as any).error || 'Failed to fetch Lighthouse data');
      }
    } catch (err) {
      setError('An error occurred while fetching the data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Lighthouse Report Generator</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL (e.g., https://example.com)"
          style={{ width: '300px', padding: '10px', fontSize: '16px' }}
        />
        <button
          onClick={fetchLighthouseData}
          disabled={loading}
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: loading ? '#ccc' : '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {loading ? 'Running Lighthouse...' : 'Run Lighthouse'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {report && (
        <div style={{ marginTop: '20px' }}>
          <h2>Lighthouse Report for {report.finalUrl}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {Object.entries(report.categories).map(([key, category]) => (
              <div
                key={key}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  padding: '15px',
                  width: '200px',
                  textAlign: 'center',
                }}
              >
                <h3>{category.title}</h3>
                <p
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: category.score >= 0.9 ? 'green' : category.score >= 0.5 ? 'orange' : 'red',
                  }}
                >
                  Score: {(category.score * 100).toFixed(0)}
                </p>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: '30px' }}>Audit Details</h3>
          <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
            {JSON.stringify(report.audits, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
