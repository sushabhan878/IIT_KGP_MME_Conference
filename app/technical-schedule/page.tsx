import PageLayout from "@/components/PageLayout";
import React from "react";

const page = () => {
  return (
    <PageLayout>
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Technical Schedule</h1>

        <p className="mb-6">
          Welcome to the technical schedule for the IIT KGP MME Conference.
          Below is a concise schedule overview — sessions, talks, and timings —
          available for download as a simple schedule file.
        </p>

        <a
          href="/FSEAM 2026 Technical Session Schedule.pdf"
          download
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
        >
          Download Technical Schedule
        </a>
      </main>
    </PageLayout>
  );
};

export default page;
