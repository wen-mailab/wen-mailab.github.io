export const ProspectiveStudents = () => (
  <section className="reading-page mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-16">
    <h1 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">Prospective Students</h1>
    <div className="space-y-10 text-base leading-7">
      <p>
        I am looking for highly motivated and self-driven Ph.D. students with strong atmospheric science and/or machine learning backgrounds.
      </p>

      <section aria-labelledby="how-to-contact">
        <h2 id="how-to-contact" className="mb-4 text-xl font-semibold">How to contact me</h2>
        <p>
          Email <a href="mailto:yixin.wen@stonybrook.edu">yixin.wen@stonybrook.edu</a>.
          Start your email subject with <strong>PhD Application-Semester-Year</strong>,
          replacing Semester and Year with your intended entry term.
        </p>
        <p className="mt-4">Your email should include:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Your CV and <strong>all transcripts</strong>.</li>
          <li>Your undergraduate GPA and ranking (if applicable) in your CV.</li>
          <li>Your TOEFL score in your CV. <strong>GRE is not required.</strong></li>
        </ul>
      </section>

      <section aria-labelledby="current-students">
        <h2 id="current-students" className="mb-4 text-xl font-semibold">Current Stony Brook students</h2>
        <p>Please email me your CV and transcripts to arrange an in-person meeting.</p>
      </section>

      <section aria-labelledby="masters-support">
        <h2 id="masters-support" className="mb-4 text-xl font-semibold">Master’s students</h2>
        <p>I currently provide research assistantship (RA) support for Master’s students.</p>
      </section>

      <section aria-labelledby="preferred-qualifications">
        <h2 id="preferred-qualifications" className="mb-4 text-xl font-semibold">Preferred qualifications</h2>
        <h3 className="mb-2 font-semibold">Ph.D. students</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            At least one first-author publication in a top-tier venue in your current research field
            or at a conference.
          </li>
          <li>Undergraduate GPA above 3.3/4.0, or equivalent.</li>
          <li>Strong motivation and a proactive approach to making progress.</li>
          <li>Good communication skills.</li>
        </ul>
        <h3 className="mb-2 mt-6 font-semibold">Undergraduate and graduate interns</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>Undergraduate GPA above 3.9/4.0, or equivalent.</li>
          <li>Strong motivation and a proactive approach to making progress.</li>
          <li>Good communication skills.</li>
        </ul>
      </section>
    </div>
  </section>
);
