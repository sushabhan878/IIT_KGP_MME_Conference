import React from 'react';
import PageLayout from '@/components/PageLayout';

const PreconferenceCertificate = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-wide text-indigo-300 uppercase">
            IIT Kharagpur in association with AMPP India Chapter
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-indigo-50">
            Residential Certificate Course on
          </h1>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-orange-300">
            “Advanced Surface Engineering for Corrosion Prevention”
          </h2>
          <p className="mt-3 text-base md:text-lg font-medium text-indigo-100">
            19<span className="align-super text-xs">th</span> – 20
            <span className="align-super text-xs">th</span> January 2026
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Objective & Topics */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-7 shadow-lg shadow-slate-900/60">
            <h3 className="text-xl font-semibold text-orange-300 mb-3">
              Objective
            </h3>
            <p className="text-sm md:text-base text-slate-100 leading-relaxed mb-5">
              This course is intended to deliver the fundamentals of
              corrosion-based degradation usually encountered by engineering
              components in power plants, oil and gas pipelines, aerospace,
              automotive and marine sectors, along with the prevention of
              component-specific corrosion through different surface
              engineering techniques. A brief overview of various surface
              engineering techniques, process optimization and their industrial
              applications will be discussed. Techniques used for corrosion
              testing and analysing its mechanisms will also be covered.
            </p>

            <h3 className="text-xl font-semibold text-orange-300 mb-3">
              Topics to be Covered
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-slate-100">
              <li>Fundamentals of Corrosion and High-Temperature Oxidation</li>
              <li>Demonstration of Advanced Surface Treatment Techniques</li>
              <li>Nanostructured and Functional Coatings</li>
              <li>
                State-of-the-art Characterization and Testing Techniques for
                Surface Studies
              </li>
              <li>Industrial Applications and Case Studies</li>
            </ul>
          </section>

          {/* Who should attend & note */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-7 shadow-lg shadow-slate-900/60">
            <h3 className="text-xl font-semibold text-orange-300 mb-3">
              Who Should Attend?
            </h3>
            <p className="text-sm md:text-base text-slate-100 leading-relaxed mb-5">
              This course is designed for students, researchers and industry
              professionals from materials, metallurgy, mechanical, chemical,
              civil and allied engineering or science backgrounds who wish to
              gain expertise in corrosion prevention through surface
              engineering. It is also valuable for industry practitioners
              seeking practical solutions to enhance material durability and
              performance. A discussion and quiz session will be conducted at
              the end of the course to assess the knowledge gained by the
              participants.
            </p>
            <div className="mt-4 rounded-xl bg-emerald-900/40 border border-emerald-500/70 px-4 py-3">
              <p className="text-sm md:text-base font-semibold text-emerald-200">
                Participation certificate will be issued after successful
                completion of the course.
              </p>
            </div>
          </section>
        </div>

        {/* Course details */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2">
              Class Timings
            </h4>
            <p className="text-lg font-bold text-slate-50">
              08:00 hrs – 17:00 hrs
            </p>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2">
              Course Venue
            </h4>
            <p className="text-lg font-bold text-slate-50">IIT Kharagpur</p>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2">
              Registration Fees
            </h4>
            <p className="text-lg font-bold text-slate-50">
              INR 15,000 + GST per delegate
            </p>
            <p className="mt-2 text-xs md:text-sm text-slate-200 leading-snug">
              <span className="font-semibold">Concession:</span> For delegates already
              registered for the main conference, the preconference course fee is
              <span className="font-semibold"> INR 7,500 + GST</span>{' '}
              (<span className="font-semibold">50% waiver</span>).
            </p>
          </div>
        </section>

        <section className="mt-6 flex flex-col md:flex-row gap-6 md:items-center">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex-1">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2">
              Registration Deadline
            </h4>
            <p className="text-lg font-bold text-rose-300">
              10<span className="align-super text-xs">th</span> January 2026
            </p>
          </div>
        </section>

        {/* Additional information */}
        <section className="mt-10 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-7">
          <h3 className="text-lg md:text-xl font-semibold text-orange-300 mb-3">
            Additional Opportunity
          </h3>
          <p className="text-sm md:text-base text-slate-100 leading-relaxed">
            In addition, IIT Kharagpur is also organizing an International
            Conference on recent trends in surface engineering and tribology
            during 21
            <span className="align-super text-xs">st</span> – 23
            <span className="align-super text-xs">rd</span> January 2026.
            Interested participants of this certificate course may attend the
            conference as delegates with a registration fee concession, as per
            the applicable categories.
          </p>
        </section>

        {/* Contact details */}
        <section className="mt-10 grid gap-6 lg:grid-cols-[2fr,3fr]">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg md:text-xl font-semibold text-orange-300 mb-3">
              For Details Please Contact
            </h3>
            <div className="space-y-4 text-sm md:text-base text-slate-100">
              <div>
                <p className="font-semibold">Mr. Rishikesh Mishra</p>
                <p>Manager – Technical Services, AIC</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:rishikesh@naceindia.org"
                    className="text-sky-300 hover:text-sky-200 underline"
                  >
                    rishikesh@naceindia.org
                  </a>
                </p>
                <p>
                  Cell / WhatsApp:{' '}
                  <a
                    href="tel:+919820459356"
                    className="text-sky-300 hover:text-sky-200 underline"
                  >
                    +91 98204 59356
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg md:text-xl font-semibold text-orange-300 mb-3">
              Copy To
            </h3>
            <div className="space-y-2 text-sm md:text-base text-slate-100">
              <p className="font-semibold">Prof. Jyotsna Dutta Majumdar</p>
              <p>
                Professor, Department of Metallurgical and Materials
                Engineering, IIT Kharagpur
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:duttamajumdarjyotsna@gmail.com"
                  className="text-sky-300 hover:text-sky-200 underline"
                >
                  duttamajumdarjyotsna@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Download registration form */}
        <section className="mt-10">
          <div className="text-center">
            <p className="mb-4 text-sm md:text-base font-semibold text-slate-100 uppercase tracking-wide">
              Download Registration Form
            </p>
            <a
              href="/registration-form.pdf"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold shadow-lg shadow-indigo-900/50 hover:from-indigo-400 hover:to-blue-500 transition-all duration-200 transform hover:-translate-y-0.5"
              download
            >
              Download Form
            </a>
          </div>

          <div className="mt-6 max-w-3xl mx-auto rounded-2xl border border-red-500/80 bg-red-900/40 px-5 py-4 shadow-lg shadow-red-900/40">
            <p className="text-xs md:text-sm font-semibold text-red-50 uppercase tracking-wide mb-1">
              Important – Mandatory Step
            </p>
            <p className="text-xs md:text-sm text-red-50 leading-relaxed">
              <span className="font-bold">After completion of payment,</span>{' '}
              the registration form <span className="font-bold">must</span> be
              duly filled in and emailed to{' '}
              <a
                href="mailto:fseam.iitkgp.2025@gmail.com"
                className="font-semibold text-amber-200 underline hover:text-amber-100"
              >
                fseam.iitkgp.2025@gmail.com
              </a>{' '}
              for your registration to be processed and confirmed.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default PreconferenceCertificate;
