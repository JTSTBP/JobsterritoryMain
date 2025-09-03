import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] text-[#1B084C] font-poppins py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B084C]">
          WEBSITE TERMS AND CONDITIONS
        </h1>

        {/* Intro */}
        <p className="mb-4">
          Welcome to <span className="font-semibold">Jobs Territory</span>!
          These Terms and Conditions ("Terms") govern your access to and use of{" "}
          <a
            className="text-[#6A1FFF] font-medium"
            href="https://www.jobsterritory.com/"
          >
            www.jobsterritory.com
          </a>{" "}
          ("Website"). By accessing or using the Website, you agree to comply
          with these Terms. If you do not agree, please refrain from using the
          Website.
        </p>
        <p className="mb-4">
          We may update these Terms periodically, and any changes will be
          effective immediately upon posting. Please review them regularly. Your
          continued use of the Website signifies acceptance of the revised
          Terms.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {/* Each section */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              1. GENERAL TERMS
            </h2>
            <p className="mb-2">
              1.1. The Website is operated by Jobs Territory, a company
              incorporated under the laws of India, with its registered office
              at 108, 1st Floor, Brigade Arcade, Whitefield Rd, Brigade
              Metropolis, Garudachar Palya, Bengaluru, Karnataka 560048.
            </p>
            <p className="mb-2">
              1.2. These Terms also include our Privacy Policy, along with any
              additional terms, guidelines, or policies we may publish from time
              to time, all of which are incorporated into these Terms by
              reference.
            </p>
            <p className="mb-2">
              1.3. By accessing or using the Website, you confirm that you have
              the legal capacity to enter into a binding agreement with us and
              accept these Terms.
            </p>
            <p>
              1.4. It is your responsibility to review these Terms regularly.
              Continued use of the Website following any updates indicates your
              agreement to the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              2. PURPOSE OF THE WEBSITE
            </h2>
            <p className="mb-2">
              2.1. The Website provides information about the services offered
              by Jobs Territory, including recruitment solutions, talent
              management, and employment opportunities for candidates.
            </p>
            <p className="mb-2">
              2.2. The content on the Website is for informational purposes only
              and does not constitute a commercial offer or establish any
              professional relationship.
            </p>
            <p>
              2.3. Specific products or services may have additional terms and
              conditions. For inquiries, please contact us at{" "}
              <a
                href="mailto:sarun@jobsterritory.com"
                className="text-[#6A1FFF] underline"
              >
                sarun@jobsterritory.com
              </a>
              .
            </p>
          </section>

          {/* Repeat the same pattern for sections 3–14 */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#6A1FFF]">
              3. USER INFORMATION
            </h2>
            <p className="mb-2">
              3.1. By using the Website, you may share personal or other
              information ("User Information") with us. You consent to the
              collection, use, and storage of your User Information as outlined
              in our Privacy Policy.
            </p>
            <p className="mb-2">
              3.2. You are responsible for ensuring that your User Information
              is accurate and up-to-date. Notify us promptly of any changes.
            </p>
            <p>
              3.3. Any personal data provided will be handled in compliance with
              applicable laws and our Privacy Policy.
            </p>
          </section>

          {/* ...continue similarly for sections 4 to 14 using your content */}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-sm">
            Thank you for choosing{" "}
            <span className="font-semibold">Jobs Territory</span>. We look
            forward to supporting your recruitment and career goals!
          </p>
        </div>
      </div>
    </div>
  );
}
