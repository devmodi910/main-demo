// app/webgrader/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type ScoreType = {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  overall: number;
};

type ResultType = {
  url: string;
  scores: ScoreType;
  audits: any;
};

export default function WebGraderPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [result, setResult] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchResults() {
      try {
        // Fetch the results using the ID
        const response = await fetch(`/api/results?id=${id}`);
        
        if (!response.ok) {
          throw new Error("Failed to load results");
        }
        
        const data = await response.json();
        setResult(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-slate-700">Loading results...</h2>
        </div>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-500 mb-4">Error</h2>
          <p className="text-slate-700 mb-6">{error || "Failed to load results"}</p>
          <Link 
            href="/"
            className="bg-orange-500 text-white px-5 py-2 rounded-sm font-normal transition-all duration-300 hover:bg-orange-600"
          >
            Try Again
          </Link>
        </div>
      </div>
    );
  }

  const { scores, url, audits } = result;

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <header className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <Image 
              src="/images/hubspot-tools-logo.png"
              alt="HubSpot Logo"
              width={120}
              height={32}
            />
          </Link>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Website Performance Report
          </h1>
          <p className="text-slate-600 mb-1">Results for: <span className="font-semibold">{url}</span></p>
          <p className="text-sm text-slate-500">Powered by Google Lighthouse</p>
        </header>

        {/* Overall Score */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="relative h-32 w-32 mb-4">
              <svg viewBox="0 0 36 36" className="h-32 w-32 stroke-current">
                <path
                  className="stroke-slate-200"
                  strokeWidth="3.8"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={`${getScoreColor(scores.overall, true)}`}
                  strokeWidth="3.8"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${scores.overall}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.5" className="text-3xl font-bold" textAnchor="middle" fill="currentColor">
                  {scores.overall}
                </text>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-1">Overall Score</h2>
            <p className="text-sm text-slate-500 mb-6">Out of 100 points</p>
          </div>
        </div>

        {/* Category Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Object.entries({
            Performance: scores.performance,
            Accessibility: scores.accessibility,
            "Best Practices": scores.bestPractices,
            SEO: scores.seo,
          }).map(([category, score]) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                  <svg viewBox="0 0 36 36" className="h-16 w-16 stroke-current">
                    <path
                      className="stroke-slate-200"
                      strokeWidth="3.8"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className={getScoreColor(score)}
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray={`${score}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.5" className="text-xl font-bold" textAnchor="middle" fill="currentColor">
                      {score}
                    </text>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{category}</h3>
                  <p className="text-sm text-slate-500">{getScoreLabel(score)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Key Insights</h2>
          
          {/* Performance Insights */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Performance</h3>
            <div className="space-y-3">
              {getTopAudits(audits, "performance").map((audit, index) => (
                <div key={index} className="p-3 bg-slate-50 rounded border border-slate-200">
                  <div className="flex items-start">
                    <div className={`${getAuditIconColor(audit.score)} p-1 rounded-full mr-3 mt-1`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        {audit.score >= 0.9 ? (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        ) : audit.score >= 0.5 ? (
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-800">{audit.title}</h4>
                      <p className="text-xs text-slate-600">{audit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Other insights (accessibility, best practices, SEO) would follow the same pattern */}
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Recommendations</h2>
          <ul className="list-disc pl-6 space-y-2">
            {getRecommendations(audits).map((rec, index) => (
              <li key={index} className="text-sm text-slate-700">{rec}</li>
            ))}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Want to improve your score?</h2>
          <p className="text-slate-600 mb-6">Check out our resources to help boost your website performance</p>
          <Link
            href="/resources"
            className="bg-orange-500 text-white px-6 py-3 rounded-sm font-medium transition-all duration-300 hover:bg-orange-600"
          >
            Explore Resources
          </Link>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function getScoreColor(score: number, isOverall = false) {
  if (score >= 90) {
    return isOverall ? "stroke-green-500" : "stroke-green-500";
  } else if (score >= 50) {
    return isOverall ? "stroke-yellow-500" : "stroke-yellow-500";
  } else {
    return isOverall ? "stroke-red-500" : "stroke-red-500";
  }
}

function getScoreLabel(score: number) {
  if (score >= 90) return "Good";
  if (score >= 50) return "Needs Improvement";
  return "Poor";
}

function getAuditIconColor(score: number | null) {
  if (score === null) return "text-slate-400 bg-slate-100";
  if (score >= 0.9) return "text-green-500 bg-green-100";
  if (score >= 0.5) return "text-yellow-500 bg-yellow-100";
  return "text-red-500 bg-red-100";
}

function getTopAudits(audits: any, category: string) {
  // This would extract relevant audits from the Lighthouse results
  // Simplified for this example
  return Object.values(audits)
    .filter((audit: any) => audit.relevantAudits?.includes(category) || audit.group === category)
    .sort((a: any, b: any) => (a.score || 0) - (b.score || 0))
    .slice(0, 3)
    .map((audit: any) => ({
      title: audit.title,
      description: audit.description,
      score: audit.score
    }));
}

function getRecommendations(audits: any) {
  // Extract actionable recommendations from audits
  // Simplified for this example
  return Object.values(audits)
    .filter((audit: any) => audit.score && audit.score < 0.9 && audit.description)
    .slice(0, 5)
    .map((audit: any) => audit.description);
}