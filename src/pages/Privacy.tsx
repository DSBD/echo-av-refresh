import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl mb-2">
            PRIVACY <span className="gradient-text">POLICY</span>
          </h1>
          <p className="text-muted-foreground mb-10">Effective Date: June 27, 2023</p>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              This Privacy Policy describes how Brian Junaid ("EchoAV Event Productions", "EchoAV", 
              "EchoAV Events", "we," "us," or "our") collects, uses, and discloses personal information 
              when you visit our website, echoav.ca ("Website"), and engage with our services. We are 
              committed to protecting your privacy and ensuring the security of your personal information. 
              By using our Website, you consent to the terms of this Privacy Policy.
            </p>

            <h2 className="font-display text-2xl text-foreground !mt-10">1. Collection of Personal Information</h2>
            <p>
              <strong className="text-foreground">1.1 Information You Provide:</strong> We may collect personal 
              information you voluntarily provide when you interact with our Website or engage with our services. 
              This information may include your name, contact details (such as email address, phone number, and 
              mailing address), and payment information.
            </p>
            <p>
              <strong className="text-foreground">1.2 Information Collected Automatically:</strong> We may 
              automatically collect certain information when you visit our Website, such as your IP address, 
              browser type, operating system, referring website, pages viewed, and the dates and times of your 
              visits. We may use cookies, web beacons, and similar technologies to collect this information.
            </p>

            <h2 className="font-display text-2xl text-foreground !mt-10">2. Use of Personal Information</h2>
            <p>2.1 We may use the personal information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our services, process transactions, and fulfill your orders.</li>
              <li>To communicate with you, respond to your inquiries, and provide customer support.</li>
              <li>To personalize and improve your experience on our Website.</li>
              <li>To send you promotional emails and newsletters (you can opt-out of receiving these communications at any time).</li>
              <li>To detect, investigate, and prevent fraudulent or unauthorized activities.</li>
              <li>To comply with legal obligations and enforce our rights.</li>
            </ul>

            <h2 className="font-display text-2xl text-foreground !mt-10">3. Disclosure of Personal Information</h2>
            <p>3.1 We may disclose personal information to the following third parties:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers and business partners who assist us in operating our business and providing our services.</li>
              <li>Legal and regulatory authorities, as required by law or to protect our rights and the rights of others.</li>
              <li>Successors or affiliates in the event of a merger, acquisition, or reorganization.</li>
            </ul>
            <p>3.2 We will not sell, rent, or lease your personal information to third parties for their marketing purposes.</p>

            <h2 className="font-display text-2xl text-foreground !mt-10">4. Data Security</h2>
            <p>
              4.1 We implement reasonable security measures to protect the personal information we collect. 
              However, please be aware that no method of transmission over the internet or method of electronic 
              storage is completely secure.
            </p>

            <h2 className="font-display text-2xl text-foreground !mt-10">5. Third-Party Websites</h2>
            <p>
              5.1 Our Website may contain links to third-party websites. This Privacy Policy does not apply to 
              those websites, and we are not responsible for the privacy practices or content of such websites. 
              We encourage you to read the privacy policies of any third-party websites you visit.
            </p>

            <h2 className="font-display text-2xl text-foreground !mt-10">6. Your Choices</h2>
            <p>
              6.1 You may choose not to provide certain personal information, but this may limit your ability 
              to use certain features of our Website or engage with our services.
            </p>
            <p>
              6.2 You can opt-out of receiving promotional emails and newsletters by following the instructions 
              provided in such communications or by contacting us directly.
            </p>

            <h2 className="font-display text-2xl text-foreground !mt-10">7. Changes to this Privacy Policy</h2>
            <p>
              7.1 We may update this Privacy Policy from time to time. The revised policy will be posted on our 
              Website, and the effective date will be indicated at the top of the policy. We encourage you to 
              review this Privacy Policy periodically.
            </p>

            <h2 className="font-display text-2xl text-foreground !mt-10">8. Contact Us</h2>
            <p>
              8.1 If you have any questions or concerns about this Privacy Policy or our privacy practices, 
              please contact us at{" "}
              <a href="mailto:events@echoav.ca" className="text-primary hover:underline">
                events@echoav.ca
              </a>.
            </p>

            <p className="!mt-10 text-sm">
              Please note that this Privacy Policy is governed by the laws of Ontario, Canada. By using our 
              Website, you consent to the exclusive jurisdiction and venue of the courts located in Ontario 
              for any disputes arising out of or relating to this Privacy Policy.
            </p>
            <p className="text-sm">
              Please read this Privacy Policy carefully and ensure that you understand its terms. By using our 
              Website, you acknowledge that you have read, understood, and agree to the terms as outlined above.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
