import React from 'react';

// To avoid JSX parsing issues in a .ts file, we use React.createElement directly.
const h = React.createElement;

const financeServices = [
    {
        slug: 'personal-loan',
        title: 'PERSONAL LOAN',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'A personal loan is an amount of money borrowed from a lending company or bank at a certain rate of interest to be paid with an EMI every month. Unlike a home loan, this is typically unsecured, meaning it does not require collateral.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Key Facts about Personal Loans'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Loan Amount and Tenure'),
                h('li', null, 'Interest Rate (Fixed or Variable)'),
                h('li', null, 'Processing Fees and Other Charges'),
                h('li', null, 'Prepayment Options')
            ),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Eligibility Criteria'),
            h('p', null, 'Eligibility for a personal loan is primarily assessed based on your repayment capacity, income, age, qualification, and job stability. A strong credit history is crucial for approval and for securing a favorable interest rate.')
        )
    },
    {
        slug: 'business-loan',
        title: 'BUSINESS LOAN',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'An unsecured business loan is issued based on the borrower’s creditworthiness rather than any type of collateral. These loans are obtained without using property or other assets as security.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Key features about Unsecured Business Loans'),
             h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, h('strong', null, 'No collateral: '), 'No collateral is required, making it accessible for short-term or immediate funding needs.'),
                h('li', null, h('strong', null, 'Creditworthiness is key: '), 'Lenders assess your business\'s financial health and credit history to determine eligibility.'),
                h('li', null, h('strong', null, 'Higher interest rate: '), 'Interest rates are typically higher compared to secured loans due to the increased risk for the lender.')
            ),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Unsecured Loan Eligibility Criteria'),
            h('p', null, 'Eligibility extends to salaried employees, doctors, and employees of public and private limited companies. General criteria include a minimum net monthly income, a minimum age of 21, and a maximum age of 60 at the time of loan maturity.')
        )
    },
    {
        slug: 'home-loan',
        title: 'HOME LOAN',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'A home loan is a secured loan taken to purchase a residential or commercial property. The property itself serves as collateral. If the borrower fails to repay the loan, the lender has the legal right to recover the amount by selling the property.'),
            h('p', null, 'We offer dynamic and competitive home loan products for all property types, with funding from 50 Lacs to 50 Crore. We provide solutions with up to 80% LTV on the property\'s market value and interest rates as low as 8.35% p.a.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Key Facts about Home Loans'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Loan Amount and Tenure'),
                h('li', null, 'Total Cost of the Loan'),
                h('li', null, 'Required Documentation'),
                h('li', null, 'Importance of Insurance Cover')
            ),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Home Loan Eligibility Criteria'),
            h('p', null, 'Lenders assess your eligibility based on repayment capacity, income, age, financial position, qualifications, and job stability. A co-applicant, like a spouse, can also be included to enhance eligibility.')
        )
    },
    {
        slug: 'industrial-loan',
        title: 'INDUSTRIAL LOAN',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'We provide industrial machinery finance to all SME & MME clients. Through our long-term tie-ups with numerous public and private sector banks and financial institutions, we can arrange the necessary funding for high-value industrial equipment.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'What is Industrial Machinery Finance?'),
            h('p', null, 'Industrial equipment, from manufacturing machinery to warehouse vehicles, often carries a significant price tag. Equipment financing allows businesses to acquire these essential assets without a large upfront capital expenditure.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Eligibility Criteria'),
            h('p', null, 'Eligibility is open to owners of commercial and residential properties that are rented to entities like Banks, MNCs, reputed corporations, financial institutions, and government offices.')
        )
    },
     {
        slug: 'sme-mme-loan',
        title: 'SME / MME LOAN',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'We provide customized financial solutions to meet the growth and working capital needs of Small and Mid-size Enterprises (SMEs & MMEs). We understand that a well-organized fund flow is critical to keeping a business running efficiently.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'What is an SME?'),
            h('p', null, 'SMEs are businesses that maintain assets, revenues, and employee numbers below a certain threshold. Our mid-corporate funding aims to provide tailored solutions for these vital enterprises.'),
             h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Eligibility Criteria'),
             h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Private limited companies, sole proprietorships, and partnership firms.'),
                h('li', null, 'Firms must be defined under the Reserve Bank of India and the MSMED Act.'),
                h('li', null, 'Applicants should have a profit history for the last three years.')
            ),
        )
    },
     {
        slug: 'builder-loan',
        title: 'BUILDER LOAN',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'We offer excellent products to fund all types of real estate requirements, including inventory funding, project funding, and Lease Rent Discounting, tailored to the project\'s cash flow.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'What is Builder Funding?'),
            h('p', null, 'Builder funding is a form of private equity financing for growth-stage construction projects. We focus on investing in high-growth companies and projects that deliver both financial returns and positive environmental or social benefits.'),
             h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Key Facts about Builder Funding'),
             h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'They typically have higher, variable interest rates.'),
                h('li', null, 'They are harder to qualify for, often requiring a significant down payment and excellent credit.'),
                h('li', null, 'These are shorter-term loans that must be paid off in full upon project completion.')
            ),
             h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Eligibility Criteria'),
             h('p', null, 'Applicants must be Indian residents and seasoned builders with a minimum track record of 3 completed projects or 1 lakh sq. ft. of construction. The applicant must be between 21 and 65 years of age.')
        )
    },
      {
        slug: 'institutional-loan',
        title: 'INSTITUTIONAL LOAN',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'We have specialized products for funding schools, colleges, and hospitals that are registered as trusts or societies. We provide both unsecured and secured finance, as well as project funding for new initiatives based on the institution\'s fee collection data.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'What is Institutional Funding?'),
            h('p', null, 'Institutional funding is a fund with assets invested by institutional investors. These funds are managed to achieve various market objectives for entities like educational endowments, non-profit foundations, and retirement plans.'),
             h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Eligibility Criteria'),
             h('p', null, 'To be considered, institutions must provide a short history, a mission statement, the latest annual report, their policy on research, their research mandate, and a current strategic plan.')
        )
    },
    {
        slug: 'lap',
        title: 'LAP',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'We have a very good product in this category to fund all types of property like residential, commercials, plot, industrial, farmhouses and institutional property at a much cheaper cost from 50 Lacs to 100 Crore. To provide you a solution in this category we have a very dynamic & best product from the overall industry. Like loan against property up to 125% of market value, F.O.R on your income up to 200% and Rate of Interest as low as 9.50% p.a.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'What is Loan against Property?'),
            h('p', null, 'A loan against property is nothing but a loan which you avail by keeping your residential or any commercial property as collateral. It can also be called a secured loan. In this, security is in the kind of property owned by the person who is applying for the loan. The value of your property basically decides the amount of potential loan you will be sanctioned.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Key Facts Loan against Property'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Self-owned residential property'),
                h('li', null, 'Self-owned piece of land'),
                h('li', null, 'Self-owned commercial property'),
                h('li', null, 'Self-owned but rented commercial property'),
                h('li', null, 'Self-owned and self-occupied residential property'),
                h('li', null, 'Self-owned but rented residential property'),
            ),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Loan against Property Eligibility Criteria'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                 h('li', null, 'For getting a loan against property, your age must be 33 to 58 years.'),
                 h('li', null, 'You should be employed in a Private sector, multinational company or any reputed private company.'),
                 h('li', null, 'You should be owning a property and should be a resident of India.'),
            ),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Documents Required for Business Loan')
        )
    }
];

export { financeServices };