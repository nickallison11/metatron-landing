import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — metatron",
  description:
    "Terms and conditions for the metatron website and MetatronDAO communications.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ed]">
      <header className="border-b border-[var(--border)] bg-[rgba(10,10,15,0.85)] backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/metatron-logo.png"
              alt="metatron"
              width={180}
              height={42}
              className="h-[42px] w-auto"
              unoptimized
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--text-muted)] transition hover:text-[var(--text)]"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Terms and Conditions
        </h1>

        <p className="mt-8 leading-relaxed text-[var(--text-muted)]">
          These terms and conditions apply to this website and all communication
          which originates from or references MetatronDAO or its subsidiaries.
        </p>
        <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
          Your access to, use and/or consumption of our website or
          communications is subject to these terms and conditions. If you
          don&apos;t agree to be bound by these terms and conditions, you should
          not access, use and/or consume the website or communication or any
          form of communication these terms and conditions govern.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            Interpretation
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Below are terms and phrases used in these terms and conditions which
            have specific meanings:
          </p>
          <dl className="mt-6 space-y-4 text-[var(--text-muted)]">
            <div>
              <dt className="font-medium text-[var(--text)]">Applicable Laws</dt>
              <dd className="mt-1 leading-relaxed">
                local, foreign and international laws, regulations, treaties and
                codes, for example the Financial Action Task Force (FATF)
                Standards, and the Foreign Account Tax Compliance Act of the
                United States of America.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Communication</dt>
              <dd className="mt-1 leading-relaxed">
                electronic messages, notices and/or communications which are
                published to or disseminated through social services or networks
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Contractors</dt>
              <dd className="mt-1 leading-relaxed">
                any legal or natural person who is contracted to render services
                or provide products to MetatronDAO and who is not an employee
                (&apos;contractor&apos; has a corresponding meaning)
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Employees</dt>
              <dd className="mt-1 leading-relaxed">
                employees of MetatronDAO (&apos;employee&apos; has a
                corresponding meaning)
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">MetatronDAO</dt>
              <dd className="mt-1 leading-relaxed">
                means and/or is a reference to Metatron DAO (Pty) Ltd
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">
                MetatronDAO subsidiaries
              </dt>
              <dd className="mt-1 leading-relaxed">
                MetatronDAO&apos;s subsidiary companies and/or trading divisions
                and/or operating divisions
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Social services</dt>
              <dd className="mt-1 leading-relaxed">
                online social networks, social media generally and similar
                communication tools including, but not limited to, blogs,
                Facebook, Twitter and LinkedIn
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">
                Terms and conditions
              </dt>
              <dd className="mt-1 leading-relaxed">
                the terms and conditions set out in this document
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">You</dt>
              <dd className="mt-1 leading-relaxed">
                means, in the context of content or the website, anyone who uses
                the website
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Website</dt>
              <dd className="mt-1 leading-relaxed">
                means the website located at or accessed through{" "}
                <a
                  href="https://metatron.id"
                  className="text-[var(--accent)] underline-offset-2 hover:underline"
                >
                  https://metatron.id
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            Ownership and copyright
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            This website and its content are owned by MetatronDAO and/or its
            licensors and are protected by copyright and other intellectual
            property laws. All rights not expressly granted are reserved. Any
            unauthorized copying, production, retransmission, distribution,
            dissemination, sale, publication, broadcast or other circulation,
            or exploitation of this material will constitute an infringement of
            such protection. The copyright in all material vesting in MetatronDAO
            published on this website shall continue to vest in MetatronDAO.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Without detracting from the above, MetatronDAO authorizes you to
            view, copy, download, print and distribute the content of this
            website, provided the content is used only for your information,
            non-commercial and private purposes. You are expressly prohibited
            from incorporating any proprietary material of MetatronDAO and/or
            its licensors taken from this website in any other work, publication
            or website either of your own or belonging to any third party.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            The trademarks, logos and service marks (&apos;marks&apos;) displayed
            on this website are registered and/or in the process of being
            registered. Nothing contained on this website or in the content or
            information provided should be construed as granting any license or
            right to use any of the marks without the prior written permission of
            the owner and no right, title or interest in any proprietary
            material contained on this website is granted to you.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            General information and non-solicitation
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            The information and content accessible through this website is
            provided by MetatronDAO as general information about MetatronDAO and
            its services. MetatronDAO does not guarantee the suitability or
            potential value of any information or particular investment source.
            No information or content on this website is intended to provide nor
            does it constitute financial, tax, legal, investment, or other
            advice. It is recommended that you consult an independent financial
            adviser regarding your specific situation if you require financial
            and/or investment advice.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Nothing contained in any service provided or any content on this
            website constitutes a solicitation, recommendation, endorsement or
            offer by MetatronDAO, including in regard to buying, selling or
            holding any securities or making any investments.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            Waiver and liability
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            The content on this website and the information contained therein is
            made available to you &apos;as is&apos; and &apos;as available&apos;.
            MetatronDAO has taken and will continue to take care that all
            information provided on this website is true and correct in so far
            as this is under MetatronDAO&apos;s control. However, MetatronDAO does
            not warrant that this website, the content provided or information
            contained therein will be error-free or will meet any particular
            criteria of accuracy, completeness or reliability of information,
            performance or quality and disclaims any liability for, any loss,
            damage (whether direct or consequential) or expense of any nature
            whatsoever which may be suffered as a result of or which may be
            attributable, directly or indirectly, to the use of or reliance upon
            any information, links or service provided through this website.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Although MetatronDAO has taken reasonable measures to ensure the
            integrity of this website, including the content provided and the
            information contained therein, there is no warranty of any kind,
            expressed or implied made by MetatronDAO, regarding the information
            or aspect of any service provided. Any warranty implied by law is
            hereby excluded except to the extent that such exclusion would be
            unlawful.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            Communication disclaimer
          </h2>

          <h3 className="mt-6 text-lg font-semibold text-[var(--text)]">
            Confidentiality
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            Any communication may contain information that is confidential,
            private or privileged. If you are not the intended recipient of
            this information (or the intended recipient&apos;s authorized
            representative) you must:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>
              Notify MetatronDAO of this fact immediately by email, fax or
              telephone and delete the communication from your system, where
              appropriate
            </li>
            <li>
              Refrain from storing, printing, copying, forwarding, extracting or
              disclosing any information contained in the communication or any
              part thereof
            </li>
            <li>
              Refrain from reading, storing, using, selling or incorporating any
              information contained in the communication into any database or
              mailing list for whatever reason including for, but not limited to,
              purposes of spamming or marketing.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Failure to do so may amount to the unlawful interception of the
            communication; breach of privilege and/or confidentiality; the
            infringement of copyright and/or the infringement of the right to
            privacy, thus potentially exposing you to criminal and civil
            liability.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text)]">
            Liability limitation
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            MetatronDAO does not warrant that any communication, the content
            provided or information contained therein will be error-free or will
            meet any particular criteria of accuracy, completeness or
            reliability of information, performance or quality.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Neither MetatronDAO, the communication&apos;s originator, or any
            other MetatronDAO representative will be liable for any loss, damage
            or expense of any nature (including without limitation, that caused
            by the corruption or loss of data, damage to software programs and
            interruption of business operations) resulting directly or
            indirectly from:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>
              the transmission of the communication (including, without
              limitation, any malicious software code or viruses transmitted
              together with or obtained through the communication, or any
              corruption to or loss of data caused or facilitated by the
              communication),
            </li>
            <li>
              or the use of or reliance upon any information, links or service
              provided through the communication,
            </li>
            <li>
              or any variation being made to any document or correspondence
              emailed unless the variation has been approved by the sender.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            The views and opinions expressed in the communication do not
            necessarily reflect MetatronDAO&apos;s views and opinions. In
            particular, no employee or contractor is permitted to send (and you
            agree that MetatronDAO will not be liable or responsible for):
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>
              unsolicited commercial messages where recipients of unsolicited
              email have not specifically opted to receive or, having done so,
              have indicated their unwillingness to receive further unsolicited
              email (spam)
            </li>
            <li>
              messages that infringe any third party&apos;s copyright,
              trademarks or other rights and interests (infringing content)
            </li>
            <li>
              messages containing content that is offensive, derogatory, racist,
              defamatory or otherwise unlawful (offensive content).
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            If the communication constitutes spam, contains infringing or
            offensive content, or was otherwise sent for purposes unrelated to
            the official business of MetatronDAO, MetatronDAO will not be liable
            for any loss, damage or expense of any nature, no matter how arising,
            resulting in your receipt, use and/or consumption of this email.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            You consent to MetatronDAO monitoring, accessing, blocking,
            deleting, copying or otherwise intercepting communication
            originating from MetatronDAO and/or its employees and contractors
            as well as any communication sent in response to the originating
            communication, where appropriate.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text)]">
            Electronic communications
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            By communicating with MetatronDAO through electronic means, you
            consent to receiving communications electronically and agree that
            all agreements, notices, disclosures and all other communications
            transmitted by electronic means satisfy any legal requirement,
            including but not limited to the requirement that such communication
            should be in writing.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Unless otherwise agreed, an email is only considered to be received
            by MetatronDAO once we have confirmed receipt; and an email is only
            considered to be sent by MetatronDAO once reflected as
            &apos;sent&apos; on our email server.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Information transmitted through electronic communications may be
            susceptible to monitoring and interception and you bear the risk of
            such submissions and you waive any claims you may have for any
            losses you may suffer as a result of information transmitted to
            MetatronDAO and which may be monitored and/or intercepted. We
            reserve the right to request independent verification of any
            information transmitted to us using electronic communications.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text)]">
            No contract
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            You agree that you may not rely on the communication, either wholly
            or in part, as constituting a contract between you and MetatronDAO
            (or otherwise has any contractual significance whatsoever) unless
            MetatronDAO expressly states, in writing, that the communication is
            intended for such purposes.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            Privacy and data security statement
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            This statement sets out what personal information MetatronDAO
            collects and how we use it. The statement applies to any information,
            including personal and special personal information, given to us, or
            which we may collect from third parties.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            The provisions of this statement are subject to mandatory,
            unalterable provisions of Applicable Laws.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            MetatronDAO takes the privacy and protection of personal information
            very seriously, and we will only use personal information in
            accordance with this statement and applicable data protection
            legislation. It is important that all necessary and appropriate steps
            to protect personal information is taken, for example, by ensuring
            that all passwords and access codes are kept secure.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            MetatronDAO have implemented a variety of security measures to
            maintain the safety of personal information when entered, submitted,
            or accessed. These measures include technological, physical and
            administrative procedures to protect personal information from loss,
            misuse, unauthorized access, disclosure, alteration, and destruction.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            We make use of a secure server. All supplied sensitive information is
            transmitted via Secure Socket Layer (SSL) technology and is only
            accessible by those authorized with special access rights to such
            systems, and are required to keep the information confidential.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Although we endeavor to keep information secure, we cannot guarantee
            that our security measures will prevent every unauthorized attempt to
            access, use or disclose personal information. We maintain procedures
            to deal with any suspected breach of personal information, and we
            will notify any relevant parties of a breach where we are legally
            required to do so.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text)]">
            How personal information is collected
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            Personal information is normally provided directly when registering
            for our services or requesting further information about our
            services, whether in writing, through our website, over the telephone
            or any other means.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            We may also collect personal information indirectly from third parties
            such as appointed agents, financial advisors or an introducer, who are
            duly authorized to disclose personal information, or from any
            regulator, fraud and money laundering prevention agency or other third
            party or public resource that may hold such information.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text)]">
            Types of information collected
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            Depending on the interaction with our website, we may collect the
            following personal information, which we have categorized as
            follows:
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-[var(--text-muted)]">
            <li>
              <strong className="text-[var(--text)]">Identity Data</strong>, which
              may include first name, last name, title, identity number.
            </li>
            <li>
              <strong className="text-[var(--text)]">Contact Data</strong>, which
              may include delivery/service address, email address, and phone
              numbers.
            </li>
            <li>
              <strong className="text-[var(--text)]">Profile Data</strong>, which
              may include username and password, customer service requests,
              interests, preferences, feedback and survey responses; and
              preferences in receiving marketing and non-marketing communications
              from us.
            </li>
            <li>
              <strong className="text-[var(--text)]">Financial Data</strong>,
              which may include bank details, credit history.
            </li>
            <li>
              <strong className="text-[var(--text)]">Transaction Data</strong>,
              which includes records of transactions carried out through the
              website and other details of services you have used.
            </li>
            <li>
              <strong className="text-[var(--text)]">Website Technical Data</strong>
              , which includes the following information if our online portal is
              used: Internet protocol (IP) address, browser type and version, time
              zone setting and location, browser plug-in types and versions,
              operating system and platform, and the ways of interaction with our
              online portal and services.
            </li>
            <li>
              <strong className="text-[var(--text)]">Customer Technical Data</strong>
              , which includes service connectivity, latency, quality metrics,
              sky obstruction data, device orientation and location, WiFi quality
              metrics, WiFi device information, and the public IP address
              information assigned.
            </li>
          </ul>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text)]">
            Use of information collected
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            We only use personal information for specific business purposes
            related to the services we provide or in situations where it is in
            our legitimate interest and which will not cause you undue prejudice.
            Below are descriptions of the purposes for which we may use certain
            categories of personal information:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>
              Providing our services or offerings which have been requested, and
              notifications about important changes to these services or
              offerings.
            </li>
            <li>
              Managing user accounts, contractual arrangements or relationships and
              complying with instructions or requests.
            </li>
            <li>
              To use data analytics to debug, optimize, and improve our platform
              and services, marketing, customer relationships and experiences.
            </li>
            <li>
              Compliance with legal obligations. This is where we need to
              process personal information to comply with any binding legal
              obligations imposed on us by any relevant governmental or
              regulatory authority.
            </li>
            <li>
              It is in our legitimate interests. This includes:
              <ul className="mt-2 list-[circle] space-y-2 pl-6">
                <li>
                  Verification for the purposes of preventing and mitigating
                  financial crimes, fraud or money laundering;
                </li>
                <li>
                  Adhering to local and international best practice guidelines; or
                </li>
                <li>
                  Performing the relevant IT due diligence testing to detect
                  malicious data and cyber threats.
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text)]">
            Disclosure of information
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            We do not sell, trade, or otherwise transfer to outside parties
            personally identifiable information. This does not include trusted
            third parties who assist us in operating our website, conducting our
            business and provision of our services, so long as those parties
            agree to keep this information confidential.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            We may also release information when we believe release is appropriate
            to comply with the Applicable Laws, enforce our site policies, or
            protect ours or other&apos;s rights, property, or safety. However,
            non-personally identifiable visitor information may be provided to
            other parties for marketing, advertising, or other uses.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            In the event of any objection to or concerns about the disclosure of
            this information to third parties, please contact us at the contact
            details set out below. We may, however, not be able to provide
            services if such disclosure is necessary for the provision of such
            services.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text)]">
            Access to, correction and deletion of personal information
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            You may access, update, or erase certain personal information that we
            have about you, or restrict or object to how we use it. If you make a
            legitimate request, we will do what you request.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            To exercise these rights, please contact us using the details below.
            For your security, we may need to request specific information from you
            to help us make sure the request is coming from you and not someone
            who has no right to receive it.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text)]">
            Use of cookies
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            Cookies are small files that a site or its service provider transfers
            to your computer&apos;s hard drive through your web browser (if you
            allow) that enables the sites or service providers systems to
            recognize your browser and capture and remember certain information.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            We use cookies to improve how our website performs and ensure that
            it functions correctly, grants access to restricted content, and
            also to understand and save your preferences for future visits.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Cookies which are set by us can be restricted or blocked through
            your browser settings. Doing so may impact on the functionality of
            our website. If you do not restrict or block any cookies, you agree
            to accept the use of all cookies.
          </p>
          <p className="mt-4 font-medium text-[var(--text)]">
            We use the following types of cookies:
          </p>
          <ul className="mt-4 list-disc space-y-4 pl-6 text-[var(--text-muted)]">
            <li>
              <strong className="text-[var(--text)]">
                Strictly necessary cookies (analytics)
              </strong>
              <p className="mt-2 leading-relaxed">
                These cookies are essential to enable you to browse around our
                websites and use their features. Without these cookies, services
                like logging in to secure sections of our website and restricting
                access based on who logged in cannot be provided.
              </p>
            </li>
            <li>
              <strong className="text-[var(--text)]">
                Performance cookies (performance)
              </strong>
              <p className="mt-2 leading-relaxed">
                These cookies collect analytical information about how you use and
                move around our website – for instance, which pages you go to
                most. This data may be used to help optimize the your browsing
                experience and make it easier for you to navigate or monitor if
                the website is starting to degrade in performance. These cookies
                don&apos;t collect information that identifies you. All
                information these cookies collect is aggregated and therefore
                anonymous.
              </p>
            </li>
            <li>
              <strong className="text-[var(--text)]">
                Functionality cookies (functional and advertisement)
              </strong>
              <p className="mt-2 leading-relaxed">
                These cookies allow our websites to remember choices you make
                while browsing. For instance, we may store your geographic
                location in a cookie to track which region visitors are coming
                from and what their interest is. The information these cookies
                collect will not personally identify you, and they cannot track
                your browsing activity on third party websites.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            Amendments
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            MetatronDAO reserves the right to suspend, terminate, replace or
            modify these terms and conditions, its website, any
            communication services, its policies and statements any time without
            notice. Any changes will appear in this document, which you can
            access on our website. If you use this website after the amendments
            have been posted, you will be deemed to have accepted the amendments
            and that you remain in agreement with the terms and conditions.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            Governing law
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            The content contained on this website and these terms and conditions
            will be interpreted and implemented in accordance with the laws of
            the Republic of South Africa.
          </p>
        </section>

        <section className="mt-12 border-t border-[var(--border)] pt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            MetatronDAO&apos;s contact details
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            If you wish to contact MetatronDAO regarding these terms and
            conditions, you may refer a query, complaint and/or comment to
            MetatronDAO at{" "}
            <a
              href="mailto:legal@metatrondao.io"
              className="text-[var(--accent)] underline-offset-2 hover:underline"
            >
              legal@metatrondao.io
            </a>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
