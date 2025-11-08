import React from 'react';
import { CompliancePackageDetailed, CompliancePackageSummary } from '../types';

// The detailed compliance data for the form
export const detailedComplianceData: CompliancePackageDetailed[] = [
  {
    packageName: "Income Tax Package",
    driveLink: "/pdfs/income-tax-package-overview.pdf", // Added driveLink for the package
    sections: [
      {
        heading: "Salary Income",
        cards: [
          {
            subHeading: "Basic Salary",
            price: "₹899",
          },
          {
            subHeading: "Salary Advanced",
            price: "₹1,499",
          },
          {
            subHeading: "Salary Pro",
            price: "₹2,499",
          },
        ],
      },
      {
        heading: "Salary + Capital Gain",
        cards: [
          {
            subHeading: "Salary + Stocks, Mutual Funds",
            price: "₹2,499",
          },
          {
            subHeading: "Salary + Future & Options, Stocks, Mutual Funds",
            price: "₹3,299",
          },
          {
            subHeading: "Salary + Future & Options, Stocks, Mutual Funds, Foreign Shares",
            price: "₹3,999",
          },
          {
            subHeading: "Salary + Future & Options Stocks, Mutual Funds, Foreign Shares, Property Sold",
            price: "₹4,999",
          },
          {
            subHeading: "Salary + Future & Options, Stocks, Mutual Funds, Foreign Shares, Property Sold, Tax Audit",
            price: "₹15,999",
          },
          {
            subHeading: "Salary + Property Sold",
            price: "₹3,999",
          },
          {
            subHeading: "Salary + Capital Gain + House Property + Other Source Without Audit",
            price: "₹7,499",
          },
        ],
      },
      {
        heading: "Business Income",
        cards: [
          {
            subHeading: "Business or Professional 44AD or 44ADA without BS, PL",
            price: "₹1,499",
          },
          {
            subHeading: "Business or Professional 44AD or 44ADA with BS, PL",
            price: "₹2,199",
          },
          {
            subHeading: "Business or Professional 44AD or 44ADA without BS, PL with Capital Gain",
            price: "₹2,499",
          },
          {
            subHeading: "Business or Professional 44AD or 44ADA with BS, PL and Capital gain Income other than Future & Options, Trading in shares",
            price: "₹3,299",
          },
          {
            subHeading: "Regular Business (ITR 3) (Without Accounting)",
            price: "₹2,999",
          },
          {
            subHeading: "Regular Business (ITR 3) (Without Accounting) with Future & options, Trading in Shares",
            price: "₹3,999",
          },
          {
            subHeading: "Regular Business ( ITR 3 ) (with Accounting - GST non Registered)",
            price: "₹4,999",
          },
          {
            subHeading: "Regular Business (ITR 3) (with Accounting - GST non Registered) including Future & Options, Trading in shares",
            price: "₹6,999",
          },
          {
            subHeading: "Tax Audit Plan",
            price: "₹14,999",
          },
          {
            subHeading: "Partnership Firm ITR",
            price: "₹3,999",
          },
          {
            subHeading: "Company / LLP ITR",
            price: "₹3,999",
          },
        ],
      },
      {
        heading: "NRI ITR",
        cards: [
          {
            subHeading: "NRO/NRE Income in India",
            price: "₹3,999",
          },
          {
            subHeading: "Outside India Income - DTAA",
            price: "₹4,999",
          },
        ],
      },
      {
        heading: "Stock Market Trader",
        cards: [
          {
            subHeading: "NRO/NRE Income in India",
            price: "₹3,999",
          },
        ],
      },
      {
        heading: "Annual Return",
        cards: [
          {
            subHeading: "Salary + Stocks, Mutual Funds",
            price: "₹2,499",
          },
          {
            subHeading: "Salary + Future & Options, Stocks, Mutual Funds",
            price: "₹3,299",
          },
          {
            subHeading: "Salary + Future & Options, Stocks, Mutual Funds, Foreign Shares",
            price: "₹3,999",
          },
          {
            subHeading: "Salary + Future & Options, Stocks, Mutual Funds, Foreign Shares, Property Sold",
            price: "₹4,999",
          },
          {
            subHeading: "Salary + Future & Options, Stocks, Mutual Funds, Foreign Shares, Property Sold, Tax Audit",
            price: "₹15,999",
          },
          {
            subHeading: "Salary + Property Sold",
            price: "₹3,999",
          },
          {
            subHeading: "Salary + Capital Gain + House Property + Other Source Without Audit",
            price: "₹7,499",
          },
        ],
      },
    ],
  },
  {
    packageName: "GST Package",
    driveLink: "/pdfs/gst-package-overview.pdf", // Added driveLink for the package
    sections: [
      {
        heading: "Composition Scheme - Yearly Package",
        cards: [
          {
            subHeading: "Turnover up to 40 Lakhs",
            price: "₹5,999",
          },
          {
            subHeading: "Turnover above 40 lakhs to 1 Cr",
            price: "₹6,499",
          },
          {
            subHeading: "Turnover above 1 Cr",
            price: "₹7,499",
          },
        ],
      },
      {
        heading: "Composition Scheme - Quarterly Package",
        cards: [
          {
            subHeading: "Turnover up to 40 Lakhs",
            price: "₹499",
          },
          {
            subHeading: "Turnover above 40 lakhs to 1 Cr",
            price: "₹1,799",
          },
          {
            subHeading: "Turnover above 1 Cr",
            price: "₹1,999",
          },
          {
            subHeading: "Turnover up to 40 Lakhs",
            price: "₹2,499",
          },
        ],
      },
      {
        heading: "Quarterly Package - Preparation and Filings of GSTR 1 and GTSR 3B, Matching with GSTR 2B",
        cards: [
          {
            subHeading: "NIL Return",
            price: "₹499",
          },
          {
            subHeading: "Regular GSTR Filings QRMP (up to 40 Lakhs Turnover)",
            price: "₹2,499",
          },
          {
            subHeading: "Regular GSTR Filings QRMP (From 40 Lakhs to 1 Cr Turnover)",
            price: "₹2,999",
          },
          {
            subHeading: "Regular GSTR Filings QRMP (From 1 cr to 2.5 Cr Turnover)",
            price: "₹3,999",
          },
          {
            subHeading: "Regular GSTR Filings QRMP (From 2.5 Lakhs to 5 Cr Turnover)",
            price: "₹5,499",
          },
        ],
      },
      {
        heading: "Regular QRMP - Yearly Package",
        cards: [
          {
            subHeading: "Regular GSTR Filings QRMP (up to 40 Lakhs Turnover)",
            price: "₹8999",
          },
          {
            subHeading: "Regular GSTR Filings QRMP (From 40 Lakhs to 1 Cr Turnover)",
            price: "₹10,999",
          },
          {
            subHeading: "Regular GSTR Filings QRMP (From 1 Lakhs to 2.5 Cr Turnover)",
            price: "₹14,999",
          },
          {
            subHeading: "Regular GSTR Filings QRMP (From 2.5 Lakhs to 5 Cr Turnover)",
            price: "₹19,999",
          },
        ],
      },
      {
        heading: "Regular Monthly Return - Yearly Package",
        cards: [
          {
            subHeading: "Regular GSTR Monthly Filings (up to 10 Cr Turnover)",
            price: "₹24,999",
          },
          {
            subHeading: "Regular GSTR monthly Filings (From 10 Cr to 25 Cr Turnover)",
            price: "₹34,999",
          },
          {
            subHeading: "Regular GSTR monthly Filings (From 25 Cr to 50 Cr Turnover)",
            price: "₹44,999",
          },
          {
            subHeading: "Regular GSTR monthly Filings (From 50 Cr to 100 Cr Turnover)",
            price: "₹49,999",
          },
        ],
      },
      {
        heading: "Regular Monthly Return - Monthly Package",
        cards: [
          {
            subHeading: "NIL Return",
            price: "₹999",
          },
          {
            subHeading: "Turnover above 40 lakhs to 1 Cr",
            price: "₹2,499",
          },
          {
            subHeading: "Turnover above 1 Cr",
            price: "₹3,499",
          },
        ],
      },
      {
        heading: "Final Return on Cancellation of GST",
        cards: [
          {
            subHeading: "Final Return - GSTR 10",
            price: "₹1,499",
          },
        ],
      },
    ],
  },
  {
    packageName: "Smart Package",
    driveLink: "/pdfs/smart-package-overview.pdf", // Added driveLink for the package
    sections: [
      {
        heading: "Proprietorship",
        cards: [
          { subHeading: "Income Tax Return + Accounting (Not GST Registered)", price: "₹4999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 40 Lakhs)", price: "₹9999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover 40 Lakhs to 1 Cr)", price: "₹12499" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover above 1 Cr)", price: "₹14999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 40 Lakhs)", price: "₹12999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 40 Lakhs to 1Cr)", price: "₹18000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 1 Cr to 2.5 Cr)", price: "₹24000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)", price: "₹36000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)", price: "₹60000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)", price: "₹78000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)", price: "₹108000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)", price: "₹132000" },
        ]
      },
      {
        heading: "Partnership",
        cards: [
          { subHeading: "Income Tax Return + Accounting (Not GST Registered)", price: "₹4999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 40 Lakhs)", price: "₹9999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover 40 Lakhs to 1 Cr)", price: "₹12499" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover above 1 Cr)", price: "₹14999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 40 Lakhs)", price: "₹12999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 40 Lakhs to 1Cr)", price: "₹18000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 1 Cr to 2.5 Cr)", price: "₹24000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)", price: "₹36000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)", price: "₹60000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)", price: "₹78000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)", price: "₹108000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)", price: "₹132000" },
        ]
      },
      {
        heading: "HUF",
        cards: [
          { subHeading: "Income Tax Return + Accounting (Not GST Registered)", price: "₹4999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 40 Lakhs)", price: "₹9999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover 40 Lakhs to 1 Cr)", price: "₹12499" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover above 1 Cr)", price: "₹14999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 40 Lakhs)", price: "₹12999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 40 Lakhs to 1Cr)", price: "₹18000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 1 Cr to 2.5 Cr)", price: "₹24000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)", price: "₹36000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)", price: "₹60000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)", price: "₹78000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)", price: "₹108000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)", price: "₹132000" },
        ]
      },
      {
        heading: "One Person Company (OPC)",
        cards: [
          { subHeading: "Income Tax Return + Accounting (Not GST Registered) + Annual Compliances + Audit", price: "₹24000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 40 Lakhs)", price: "₹30000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover 40 Lakhs to 1 Cr)", price: "₹36000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover above 1 Cr)", price: "₹42000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 40 Lakhs)", price: "₹32999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 40 Lakhs to 1Cr)", price: "₹37999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 1 Cr to 2.5 Cr)", price: "₹42999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)", price: "₹54999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)", price: "₹78000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)", price: "₹99000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)", price: "₹125000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)", price: "₹150000" },
        ]
      },
      {
        heading: "Limited Liability Partnership (LLP)",
        cards: [
          { subHeading: "Income Tax Return + Accounting (Not GST Registered) + Annual Compliances", price: "₹12999" },
          { subHeading: "Income Tax return + Accounting + Annual compliances + GST Returns Composition Dealer (Turnover upto 40 Lakhs)", price: "₹17999" },
          { subHeading: "Income Tax return + Audit + Annual Compliances + Accounting + GST Returns Composition Dealer (Turnover 40 Lakhs to 1 Cr)", price: "₹29999" },
          { subHeading: "Income Tax return + Accounting + Audit + Annual Compliances + GST Returns Composition Dealer (Turnover above 1 Cr)", price: "₹36000" },
          { subHeading: "Income Tax return + Accounting + Annual compliances + GST Returns Regular QRMP (Turnover upto 40 Lakhs)", price: "₹18999" },
          { subHeading: "Income Tax return + Accounting + Annual compliances + Audit + GST Returns Regular QRMP (Turnover 40 Lakhs to 1 Cr)", price: "₹29999" },
          { subHeading: "Income Tax return + Accounting + Audit + Annual Compliances + GST Returns Regular QRMP (Turnover 1 Cr to 2.5 Cr)", price: "₹39999" },
          { subHeading: "Income Tax return + Accounting + Audit + Annual compliances + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)", price: "₹60000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)", price: "₹78000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)", price: "₹99000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)", price: "₹125000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)", price: "₹150000" },
        ]
      },
      {
        heading: "Private Limited Company",
        cards: [
          { subHeading: "Income Tax Return + Accounting (Not GST Registered) + Annual Compliances + Audit", price: "₹24000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 40 Lakhs)", price: "₹30000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover 40 Lakhs to 1 Cr)", price: "₹36000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover above 1 Cr)", price: "₹42000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 40 Lakhs)", price: "₹32999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 40 Lakhs to 1Cr)", price: "₹37999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 1 Cr to 2.5 Cr)", price: "₹42999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)", price: "₹54999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)", price: "₹78000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)", price: "₹99000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)", price: "₹125000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)", price: "₹150000" },
        ]
      },
      {
        heading: "Section 8 Company",
        cards: [
          { subHeading: "Income Tax Return + Accounting (Not GST Registered) + Annual Compliances + Audit", price: "₹24000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 40 Lakhs)", price: "₹30000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover 40 Lakhs to 1 Cr)", price: "₹36000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover above 1 Cr)", price: "₹42000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 40 Lakhs)", price: "₹32999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 40 Lakhs to 1Cr)", price: "₹37999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 1 Cr to 2.5 Cr)", price: "₹42999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)", price: "₹54999" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)", price: "₹78000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)", price: "₹99000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)", price: "₹125000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)", price: "₹150000" },
        ]
      },
    ],
  },
  {
    packageName: "Virtual CFO Package",
    driveLink: "/pdfs/virtual-cfo-package-overview.pdf", // Added driveLink for the package
    sections: [
      {
        heading: "Proprietorship VIRTUAL CFO",
        cards: [
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 1.5 Cr) + MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹48000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 2.5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹72000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹84000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹120000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹150000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹240000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹300000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Upto Turnover 2.5 Cr", price: "₹30000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 2.5 Cr to 5 Cr", price: "₹48000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 5 Cr to 10 Cr", price: "₹60000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 10 Cr to 25 Cr", price: "₹96000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 25 Cr to 50 Cr", price: "₹120000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 50 Cr to 100 Cr", price: "₹144000" },
        ]
      },
      {
        heading: "Partnership VIRTUAL CFO",
        cards: [
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 1.5 Cr) + MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹48000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 2.5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹72000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹84000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹120000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹150000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹240000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹300000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Upto Turnover 2.5 Cr", price: "₹30000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 2.5 Cr to 5 Cr", price: "₹48000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 5 Cr to 10 Cr", price: "₹60000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 10 Cr to 25 Cr", price: "₹96000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 25 Cr to 50 Cr", price: "₹120000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 50 Cr to 100 Cr", price: "₹144000" },
        ]
      },
      {
        heading: "HUF VIRTUAL CFO",
        cards: [
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 1.5 Cr) + MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹48000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 2.5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹72000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹84000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹120000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹150000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹240000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹300000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Upto Turnover 2.5 Cr", price: "₹30000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 2.5 Cr to 5 Cr", price: "₹48000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 5 Cr to 10 Cr", price: "₹60000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 10 Cr to 25 Cr", price: "₹96000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 25 Cr to 50 Cr", price: "₹120000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 50 Cr to 100 Cr", price: "₹144000" },
        ]
      },
      {
        heading: "One Person Company (OPC) VIRTUAL CFO",
        cards: [
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 1.5 Cr) + MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹48000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 2.5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹72000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹84000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹120000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹150000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹240000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹300000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Upto Turnover 2.5 Cr", price: "₹30000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 2.5 Cr to 5 Cr", price: "₹48000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 5 Cr to 10 Cr", price: "₹60000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 10 Cr to 25 Cr", price: "₹96000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 25 Cr to 50 Cr", price: "₹120000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 50 Cr to 100 Cr", price: "₹144000" },
        ]
      },
      {
        heading: "Limited Liability Partnership (LLP) VIRTUAL CFO",
        cards: [
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 1.5 Cr) + MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹48000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 2.5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹72000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹84000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹120000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹150000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹240000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹300000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Upto Turnover 2.5 Cr", price: "₹30000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 2.5 Cr to 5 Cr", price: "₹48000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 5 Cr to 10 Cr", price: "₹60000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 10 Cr to 25 Cr", price: "₹96000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 25 Cr to 50 Cr", price: "₹120000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 50 Cr to 100 Cr", price: "₹144000" },
        ]
      },
      {
        heading: "Private Limited Company VIRTUAL CFO",
        cards: [
          { subHeading: "Income Tax return + Accounting + GST Returns Composition Dealer (Turnover upto 1.5 Cr) + MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹48000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover upto 2.5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹72000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular QRMP (Turnover 2.5 Cr to 5 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹84000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover upto 10 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹120000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 10 Cr to 25 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹150000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 25 Cr to 50 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹240000" },
          { subHeading: "Income Tax return + Accounting + GST Returns Regular Monthly (Turnover 50 Cr to 100 Cr)+ MIS Reporting + Budgeting + Finance Advice + Business Guide", price: "₹300000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Upto Turnover 2.5 Cr", price: "₹30000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 2.5 Cr to 5 Cr", price: "₹48000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 5 Cr to 10 Cr", price: "₹60000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 10 Cr to 25 Cr", price: "₹96000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 25 Cr to 50 Cr", price: "₹120000" },
          { subHeading: "MIS Reporting + Budgeting + Finance advice + Business Guide Turnover 50 Cr to 100 Cr", price: "₹144000" },
        ]
      },
    ],
  },
];

// Summary data for the CompliancesPage cards, derived from detailedComplianceData
export const compliancePackages: CompliancePackageSummary[] = detailedComplianceData.map(pkg => ({
    icon: 'fas fa-file-invoice', // Generic icon
    title: pkg.packageName,
    description: `Explore our comprehensive ${pkg.packageName} services tailored for your business compliance needs.`, // Generic description
    driveLink: pkg.driveLink || '#', // Use the package's driveLink, or '#' if not provided
}));