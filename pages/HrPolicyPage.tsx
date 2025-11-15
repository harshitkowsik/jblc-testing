import React from 'react';
import SEO from '../components/SEO';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <section
        className="bg-cover bg-center h-60 flex items-center justify-center text-white relative"
        style={{ backgroundImage: "url('headerbg.webp')" }}
    >
        <div className="absolute inset-0 bg-[#2e3e4d] bg-opacity-70"></div>
        <div className="text-center z-10 p-4">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="mt-2 text-lg">{subtitle}</p>
        </div>
    </section>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#2e3e4d] mb-3">{title}</h2>
        <div className="space-y-3 text-gray-700 leading-relaxed">
            {children}
        </div>
    </div>
);

const HrPolicyPage: React.FC = () => {
    return (
        <div>
            <SEO 
              title="HR Policy | JBLC INDIA"
              description="Read the HR Policy of JBLC INDIA. Learn about our policies regarding new openings, career opportunities, and employment."
              keywords="JBLC INDIA, HR policy, careers, job openings, employment policy, legal careers"
              canonicalPath="/hr-policy"
            />
            <PageHeader title="HR Policy" subtitle="Our Human Resources Policies" />
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl">

                    <Section title="Policies Regarding New Openings / Career with JBLC INDIA">
  <p>To promote legal activities and support society, JBLC INDIA is inviting applications from interested candidates. Candidates may choose any District, Tehsil, or Block of their choice in the application. JBLC INDIA always gives priority to home district or nearby district appointments, but in case more than one candidate is eligible for a single location, or if required, the Trust may appoint candidates in other districts or locations. Refusal of a job offer on the ground of location or interview date will not be considered valid, and candidates will be responsible for the same.</p>
  <p>All jobs are transferable by nature, and if required, employees may be transferred from one location to another. Candidates will be appointed on a salaried basis and will be paid their salaries for discharging their duties properly. Appointed candidates must form groups and promote activities among group members. If any candidate is found involved in any kind of financial obligation, JBLC INDIA has full rights to terminate services and take appropriate legal action against the candidate.</p>
  <p>To support Divyanga / Persons with Disabilities (PWD) in their survival, JBLC INDIA reserves up to 4% of seats for PWD. Selection of PWD candidates depends on the percentage and nature of disability, and JBLC INDIA reserves the right to select or reject candidates considering the nature of the job and health conditions.</p>
</Section>

<Section title="Required Documents for Application">
  <p>Candidates must mail or submit attested scanned copies (attested by a Gazetted Officer or Notary) of all required documents. The following papers are mandatory to be presented before the interview panel. Failure to do so will lead to rejection from the interview:</p>
  <ul className="list-disc list-inside ml-4">
    <li>ID Proof and Address Proof</li>
    <li>One recent photograph</li>
    <li>Mark-sheet and Certificate of High School / 10th Standard</li>
    <li>Mark-sheet and Certificate of Intermediate / 12th Standard</li>
    <li>Mark-sheet and Certificate of Graduation (if applicable)</li>
    <li>Experience Certificate (if any and applicable)</li>
    <li>Fitness Certificate (issued by an M.D. Doctor only) – mandatory to carry</li>
    <li>Caste Certificate (only applicable if eligible and claiming age relaxation)</li>
  </ul>
  <p>Those who have applied for more than one post will not be given separate interview slots. A single slot will be allotted, and screening will be conducted accordingly.</p>
</Section>

<Section title="Nature of Job and Salary Structure">
  <p>JBLC INDIA job openings are performance-based. Positions are for specific posting areas, and the actual Job Description will be discussed during the training session, which includes establishing “Centers of JBLC INDIA.” Salary structure includes both fixed and variable components. If candidates achieve at least 60% of the given target, they will receive their full salary. If performance is between 0–59%, the salary will correspond proportionally to the target achieved.</p>
  <p>Before starting the job, selected candidates must:</p>
  <ul className="list-disc list-inside ml-4">
    <li>Submit a Security Deposit as a Demand Draft of Rs. 7,500 (fully refundable after successfully completing the probation period of 11 months).</li>
    <li>Attend the training session organized by JBLC INDIA.</li>
  </ul>
  <p>After successfully completing training, candidates must submit a list of their selected working areas. After submission, they will receive the Promotional Kit (canopy, standee, stationery materials, etc., if required) and ID Card from the office. JBLC INDIA offers a one-time joining bonus to candidates who successfully complete 11 months of service.</p>
  <p>Performance Review Appraisals are conducted once every 8 months. Based on the best performance over two consecutive 8-month periods (with 100% target achievement), candidates are eligible for promotion to the next level. Before completion of training and probation, no allowances or salaries are applicable. Other rules regarding perks, benefits, and leave remain consistent with standard employment profiles. Vacancies are provisional and subject to change depending on actual requirements.</p>
</Section>

<Section title="Re-hire and Application Policy">
  <p>As per the latest policy effective from 1st May 2020:</p>
  <ul className="list-disc list-inside ml-4">
    <li>If you were fired, laid off, or walked off the job, you become eligible for re-hire after one year from your last separation date.</li>
    <li>Candidates not selected must wait at least six months after their last application before reapplying.</li>
    <li>Those who applied in the last 180 days and did not qualify for the interview should not reapply during this period.</li>
    <li>If an application is rejected, no refund will be initiated or allowed under any circumstances.</li>
  </ul>
</Section>

<Section title="Employment Review and Termination Policy">
  <p>In the case of inactive or non-performing employees (with zero performance for the last 30 days), JBLC INDIA may terminate employment immediately. All positions are permanent by nature and performance-based. For continuous nonperformance, services may be terminated after review.</p>
  <p>Upon termination or resignation, the management will clear the full and final settlement, including pending salary or dues, within 60 working days from the last working date. For any violation of the code of conduct or disciplinary issues, JBLC INDIA reserves the right to terminate employment immediately and take appropriate legal action under Indian law.</p>
</Section>

                </div>
            </div>
        </div>
    );
};

export default HrPolicyPage;