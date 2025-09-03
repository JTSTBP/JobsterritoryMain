import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] text-[#1B084C] font-poppins py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B084C]">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="mb-4">
          Welcome to <span className="font-semibold">Jobs Territory’s</span>{" "}
          Privacy Policy.
        </p>
        <p className="mb-4">
          At Jobs Territory, your privacy is our priority. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you visit our website{" "}
          <a
            className="text-[#6A1FFF] font-medium"
            href="https://www.jobsterritory.com/"
          >
            www.jobsterritory.com
          </a>{" "}
          (the "Platform") or use our services (the "Services"). By using our
          Platform, you agree to the terms outlined in this Policy.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              1. Who We Are
            </h2>
            <p>
              Jobs Territory provides job-related services to connect talent
              with opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              We collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">Personal Information:</span> Name,
                email address, phone number, mailing address, LinkedIn profile.
              </li>
              <li>
                <span className="font-medium">Technical Information:</span> IP
                address, browser type, device details, and website usage data.
              </li>
              <li>
                <span className="font-medium">Transaction Details:</span>{" "}
                Payment information and details about services availed.
              </li>
              <li>
                <span className="font-medium">Preferences:</span> Marketing
                preferences, survey responses, and feedback.
              </li>
            </ul>
            <p className="mt-2">
              We may also collect non-personal, aggregated data for analysis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              3. How We Collect Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">Directly from You:</span> When you
                create an account, fill out forms, or communicate with us.
              </li>
              <li>
                <span className="font-medium">Automatically:</span> Through
                cookies, analytics tools, and server logs.
              </li>
              <li>
                <span className="font-medium">From Third Parties:</span>{" "}
                Publicly available sources and service providers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              4. How We Use Your Information
            </h2>
            <p>Your information helps us:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Provide, improve, and personalize our Services.</li>
              <li>Communicate updates, promotions, and important notices.</li>
              <li>Ensure security and compliance with legal obligations.</li>
              <li>Process payments and manage your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              5. Sharing Your Information
            </h2>
            <p className="mb-2">
              We do not sell your data. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">Service Providers:</span> For
                payment processing, analytics, or operational support.
              </li>
              <li>
                <span className="font-medium">Legal Authorities:</span> When
                required by law or to protect our rights.
              </li>
              <li>
                <span className="font-medium">Business Partners:</span> During
                mergers, acquisitions, or other business transfers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              6. International Data Transfers
            </h2>
            <p>
              Your data may be processed outside your country of residence. By
              using our Platform, you consent to such transfers, subject to
              safeguards as per applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              7. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your data, including
              encryption and secure servers. However, no system is entirely
              foolproof.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              8. Data Retention
            </h2>
            <p>
              We retain your information only as long as necessary for the
              purposes outlined or as required by law. Anonymized data may be
              retained for research or statistical purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              9. Your Rights
            </h2>
            <p className="mb-2">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access, update, or delete your personal data.</li>
              <li>Withdraw consent for certain processing activities.</li>
              <li>Object to data usage or request data portability.</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, contact us at{" "}
              <span className="text-[#6A1FFF] font-medium">
                [Insert Contact Details]
              </span>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              10. Cookies
            </h2>
            <p>
              We use cookies to enhance your browsing experience. You can manage
              your cookie preferences through your browser settings. Disabling
              cookies may affect certain website functionalities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              11. Updates to This Policy
            </h2>
            <p>
              We may revise this Policy from time to time. Updates will be
              posted on our Platform, and significant changes will be
              communicated directly. Continued use of our Platform after updates
              constitutes your acceptance of the revised Policy.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-sm">
            For any questions or concerns, contact us at{" "}
            <a
              href="mailto:sarun@jobsterritory.com"
              className="text-[#6A1FFF] underline"
            >
              sarun@jobsterritory.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
