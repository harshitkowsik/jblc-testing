import React from 'react';

// To avoid JSX parsing issues in a .ts file, we use React.createElement directly.
const h = React.createElement;

const services = [
    {
        slug: 'tax',
        icon: 'fas fa-landmark',
        title: 'TAXATION',
        description: 'Expert advisory and litigation services for all your tax-related matters.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'We provide both tax advisory and litigation services to our clients. We advise our client on a wide range of tax related matters. Our firm provides services to several blue chip companies. We also assist on negotiations and disputes with the tax authorities or other authorities as opponent. We resolve disputes for businesses – from international groups of companies to owner-managed businesses and one-man firms – and for individuals as well.'),
            h('p', null, 'We have well qualified and experience team of lawyers. We provide individual attention to all the clients who approaches us. We strive to provide best of our service in a cost effective manner.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'We advise on areas such as:'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Direct and Indirect tax'),
                h('li', null, 'Customs and excise duties'),
                h('li', null, 'Tax liability issues'),
                h('li', null, 'Company taxation'),
                h('li', null, 'Personal income taxation'),
                h('li', null, 'Foreign Trade Policy etc.')
            ),
            h('p', { className: 'mt-4 font-semibold' }, 'We look forward to help you in your legal matters.')
        )
    },
    {
        slug: 'ipr',
        icon: 'fas fa-copyright',
        title: 'IPR',
        description: 'Comprehensive, end-to-end services for protecting your valuable intellectual property.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'We are professionally managed Intellectual Property law firm. We provide end to end services of Intellectual property related issue. We rely on efficient and timely service to our clients. We take effort to address problems of our clients with immediate solutions in a cost effective manner. We advise on various legal, commercial and compliance issues relating to Intellectual Property.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Intellectual properties include:'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Patent'),
                h('li', null, 'Trademark'),
                h('li', null, 'Geographical Indication'),
                h('li', null, 'Copyright'),
                h('li', null, 'Industrial Design')
            ),
            h('h4', { className: 'text-lg font-semibold mt-4' }, 'Patent:'),
            h('p', null, 'Patent is a monopoly right given to a person who has invented a new and useful product or a new process of making a product. The owner of patent can sell this property, grant licenses to others to exploit the property or even surrender it.'),
            h('h4', { className: 'text-lg font-semibold mt-4' }, 'Trademark:'),
            h('p', null, 'A Trademark is visual representation attached to goods and services for purpose of indicating their trade origin. It is visual symbol which may be a word, signature, name, device, label, numerals or combination of colours.'),
        )
    },
    {
        slug: 'property',
        icon: 'fas fa-home',
        title: 'PROPERTY',
        description: 'Navigating the complexities of property transactions with professional guidance.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'There are few experiences more stressful than buying or selling property; they are of course the negotiations, the financing, and the verification of documents and let’s not forget the legal processes which must be handled during the transaction. As a lawyer handling real estate issues, we have keen insight into the often complex selling/buying process, landlord/tenant matters and property matters.'),
            h('p', null, 'Our Legal team is well experience and good in research work as well as into litigation. We give individual attention to all the client we have. We provide proper idea to the client about the valuation of the property.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'We handle legal matters such as:'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Property/flat verification'),
                h('li', null, 'Preparation of sale/rent/mortgage/lease deeds'),
                h('li', null, 'Negotiation during sale of property'),
                h('li', null, 'Title of Property issues'),
                h('li', null, 'Easement related issues'),
                h('li', null, 'Registration of property')
            ),
            h('p', { className: 'mt-4 font-semibold' }, 'We look forward to helping you in your legal matter.')
        )
    },
    {
        slug: 'cyber-crime',
        icon: 'fas fa-shield-alt',
        title: 'CYBER CRIME',
        description: 'Specialized legal defense in the evolving landscape of information technology law.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'With the advent of information technology and the increasing power of computers, the Internet has such a tremendous impact on the way we live. The ease of doing things, the increased accessibility to information, and diminishing smaller borders of our modern world has been a boon to mankind. But it is also viewed as a bane. The Internet has become a huge spot to engage in all sorts of illegal activities.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'The following are some types of Cyber-crimes:'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Hacking'),
                h('li', null, 'Identity Theft'),
                h('li', null, 'Phishing'),
                h('li', null, 'Cyber Terrorism')
            ),
             h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Services that we provide in our law firm:'),
             h('p', null, 'Our team of Cyber Lawyers provide services to Corporate and Individuals in recovering losses due to Cyber Crime and provide Arbitration and Conciliation Support. We also provide consulting on a range of cyber law issues.'),
             h('p', { className: 'mt-4 font-semibold' }, 'We look forward to help you.')
        )
    },
    {
        slug: 'banking',
        icon: 'fas fa-university',
        title: 'BANKING',
        description: 'Innovative and effective legal solutions for the banking and finance sector.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'Our firm has always strived to create and implement innovative and effective methods of providing cost-effective, quality and services for our clients. We will continue to meet and go beyond the expectations of our esteemed clients.'),
            h('p', null, 'Lawyers of our firm are expertise in the areas of banking and finance. The team has vast experience in this area which has helped many clients in crucial aspects of banking and finance such as debt restructuring, acquisition finance, project finance, syndicated loaning, etc.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Our service includes:'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Representing in all the courts'),
                h('li', null, 'Filing the cases'),
                h('li', null, 'Drafting'),
                h('li', null, 'Sending notice to other parties'),
                h('li', null, 'Regular updating of the status of the case')
            ),
            h('p', { className: 'mt-4 font-semibold' }, 'We look forward to helping you in your legal matter.')
        )
    },
    {
        slug: 'labour',
        icon: 'fas fa-users',
        title: 'LABOUR',
        description: 'Upholding the rights and responsibilities of employers and employees.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'Labour law is concerned with the rights and responsibilities of workers. We deal with all issues related to Labour law. Also provide advice and legal services in matters relating Contract Labour Act (1970), Minimum Wages Act 1948, The Workmen’s Compensation Act, 1923, The Payment of Wages Act, 1936, The Factories Act, 1948, The EPF Act, , Weekly Holidays Act 1942, The Bonus Act and the ESI Act, with our Expertise and Extensive Knowledge you will provide you best solution.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Some of the Key Services our Labour Lawyers Provide:'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Disputes relating to breach and non performance of Contracts.'),
                h('li', null, 'Specific performance of contracts'),
                h('li', null, 'Matters relating to recovery of debts, cheque bouncing etc'),
                h('li', null, 'Matters related to Indemnity, guarantee, bailment and pledge')
            )
        )
    },
    {
        slug: 'family',
        icon: 'fas fa-heart',
        title: 'FAMILY',
        description: 'Compassionate and expert legal counsel for all family-related matters.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'Our law firm whose mission is to help men and women who are yet to be married to safeguard their hard earned money, Mothers, Fathers, Children, and/or Grandparents to take the next step in their lives by resolving their Family Law related issues though caring, thorough and belligerent legal representation.'),
            h('p', null, 'We are here for you in every step of you legal proceedings. Our focus here is to help our clients heal their past, remove the unknown from their present, and strive in their future. We are upfront, honest and responsive.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'We handle legal matters such as:'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Prenuptial agreement and separation agreement.'),
                h('li', null, 'Divorce cases'),
                h('li', null, 'Custody cases'),
                h('li', null, 'Mediation')
            ),
            h('p', { className: 'mt-4 font-semibold' }, 'We look forward to helping you in your legal matters.')
        )
    },
    {
        slug: 'company',
        icon: 'fas fa-building',
        title: 'COMPANY',
        description: 'Guiding businesses through corporate governance, compliance, and structuring.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'We are a professionally managed law firm who focus towards guiding and assisting foreign companies, foreign nationals invest in our country. We appear for our clients before various Courts and Tribunals. Our goal is to provide outstanding legal solutions with a strong emphasis on our professional ethics.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'We handle legal matters such as:'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Mergers, acquisitions and other transactions'),
                h('li', null, 'Business formation'),
                h('li', null, 'Intellectual property'),
                h('li', null, 'Employment and labour issues'),
                h('li', null, 'Arbitrations and mediations')
            ),
            h('p', { className: 'mt-4 font-semibold' }, 'We look forward to helping you in your legal matter.')
        )
    },
    {
        slug: 'accident',
        icon: 'fas fa-car-crash',
        title: 'ACCIDENT',
        description: 'Dedicated representation to secure fair compensation for accident claims.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'There has been rise in individual claiming compensation is due to the increase in the number of accidents happening. Most of the accidents result in minor vehicle damage and can usually be handled alone through direct contact with an insurance company. However, car accidents which result in physical injury, fatality, or other significant damage can’t be handled alone and may require the legal representation of an experienced accident lawyer in India.'),
            h('p', null, 'We will help you get compensation or to recover from any damage incurred due to the accident, such as medical expenses, car repairs and lost wages. To fix your any problem related to accident and its claims contact us.')
        )
    },
    {
        slug: 'civil',
        icon: 'fas fa-balance-scale',
        title: 'CIVIL',
        description: 'Resolving private disputes with strategic and effective legal representation.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'Civil Law is the system of law which is concerned with private relations between members of a community unlike criminal, military, or religious affairs. A defendant in case of civil law is never incarcerated and never executed. Losing defendant in civil law will only compensate the plaintiff for losses caused by the defendant’s behavior.'),
            h('h3', { className: 'text-xl font-bold text-gray-800 mt-4' }, 'Our areas of specialization are:'),
            h('ul', { className: 'list-disc list-inside space-y-1' },
                h('li', null, 'Sale and purchase agreements relating to property matters.'),
                h('li', null, 'Disputes relating to sale of immovable property.'),
                h('li', null, 'Matters relating to lease, charges and mortgages of property.'),
                h('li', null, 'Property registration , verification and scrutiny.'),
                h('li', null, 'Drafting and registration of all types of document.')
            )
        )
    },
    {
        slug: 'consumer-protection',
        icon: 'fas fa-shopping-cart',
        title: 'CONSUMER',
        description: 'Protecting and enforcing the rights of consumers against unfair practices.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'The law which is implemented to protect the rights of consumers, as well as fair trade, competition, and accurate information in the marketplace is known as consumer law. Consumer law deals with issues such as prohibiting false advertising and imposing product safety measures to regulating debt collection practices and protecting consumers’ identifying information etc.'),
            h('p', null, 'We are dedicated for advancing the rights of Consumers, Consumer Protection and Consumer Dispute Resolutions. We have addressed all the consumer law related issues and has good success rate in this field. We also provide related consumer law services. If you are looking for consumer lawyers or need advice for consumer related cases kindly contact us.')
        )
    },
    {
        slug: 'criminal',
        icon: 'fas fa-gavel',
        title: 'CRIMINAL',
        description: 'Robust defense and legal representation in all criminal law matters.',
        content: h('div', { className: 'space-y-4' },
            h('p', null, 'Criminal Law is a system of laws which is concerned with punishment of individuals who commit crimes. The procedure that describes the process through which the criminal laws are enforced is known as criminal procedures. Criminal acts are usually well defined and are prohibited by the state or federal governments through various statutes.'),
            h('p', null, 'JBLC INDIA is one of the most experienced and efficient law firms in India. Our skilled, astute and experienced lawyers can handle any criminal matter with ease, whether it is appearing for bail or handling a murder case or anti-corruption cases before the Sessions or before the High Court.')
        )
    }
];

export { services };
