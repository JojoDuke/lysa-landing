# Product Requirements Document (PRD)

# Lysa

### Your AI Real Estate Employee

**Version:** 1.0
**Status:** MVP
**Platform:** WhatsApp
**Business Model:** Service-as-Software (SaaS + Managed Service)

---

# 1. Product Vision

Lysa is an AI employee that works inside a real estate brokerage.

Instead of hiring another administrator to answer WhatsApp messages, qualify buyers, recommend properties and book showings, brokerages deploy Lysa into their business.

Lysa isn't sold as a chatbot or custom AI project. It's positioned as a software product that is configured for each brokerage and continuously maintained.

The goal is to make deploying AI feel as simple as hiring a new employee.

---

# 2. Mission

Give every real estate brokerage an AI employee capable of handling the majority of customer conversations without human intervention.

---

# 3. Problem

Real estate agents lose opportunities because:

* Leads contact them outside business hours.
* WhatsApp messages are missed.
* Time is spent answering repetitive questions.
* Buyers aren't qualified before the agent speaks with them.
* Agents waste time on low-quality inquiries.

---

# 4. Solution

Deploy Lysa.

Lysa responds instantly, qualifies every lead, answers questions, recommends properties and books showings while the agent focuses on selling.

---

# 5. Target Customer

Primary

* Independent Real Estate Agents
* Boutique Brokerages
* Real Estate Teams

Future Markets

* Property Developers
* Property Management
* Mortgage Brokers

---

# 6. Core Value Proposition

Lysa helps agencies:

* Never miss another lead
* Respond in seconds
* Qualify buyers automatically
* Book more showings
* Reduce administrative work
* Improve lead conversion

---

# 7. Core Capabilities

---

## Capability 1: Lead Qualification Agent

### Purpose

Determine whether an inquiry is worth pursuing and collect all relevant information before involving an agent.

### Responsibilities

* Welcome new inquiries
* Detect buyer or seller intent
* Ask qualifying questions naturally
* Capture customer details
* Generate structured lead data
* Hand qualified leads to the agent

### Data Collected

* Name
* Phone
* Email
* Buyer/Seller
* Budget
* Preferred Area
* Property Type
* Bedrooms
* Timeline
* Financing Status
* Additional Notes

### Outputs

* Qualified lead
* Conversation summary
* Lead score (Hot/Warm/Cold)

---

## Capability 2: Knowledge Agent

### Purpose

Answer questions using the brokerage's knowledge.

### Responsibilities

* Agency FAQs
* Buying process
* Selling process
* Fees
* Office information
* Property information
* Mortgage guidance
* General inquiries

### Knowledge Sources

* PDFs
* Website
* FAQs
* Property database
* Internal documents

### Outputs

* Accurate answer
* Source-backed response
* Escalation if confidence is low

---

## Capability 3: Property Discovery Agent

### Purpose

Help buyers discover relevant properties.

### Responsibilities

* Understand buyer requirements
* Search listings
* Recommend properties
* Send images
* Explain features
* Refine recommendations

### Inputs

* Budget
* Area
* Bedrooms
* Property Type
* Amenities

### Outputs

* Matching listings
* Images
* Property links
* Suggested next action

---

## Capability 4: Showing Booking Agent

### Purpose

Convert interested buyers into scheduled showings.

### Responsibilities

* Check availability
* Offer showing slots
* Confirm appointments
* Send reminders
* Notify agent

### Integrations

* Google Calendar
* Outlook Calendar
* Calendly

### Outputs

* Showing booked
* Confirmation message
* Calendar event

---

## Capability 5: Conversation Memory Agent

### Purpose

Remember customers between conversations.

### Responsibilities

* Store conversation history
* Remember preferences
* Continue previous conversations
* Personalize future interactions

### Example

Customer:

"I'm back."

Lysa:

"Welcome back. Last time you were looking for a three-bedroom home in Scottsdale under $700,000. I have two new listings you may like."

---

# 8. Optional Add-ons

These are not included in the base deployment.

* CRM Integration
* Property Valuation Agent
* Voice AI
* Email Agent
* SMS Agent
* Instagram Agent
* Facebook Messenger Agent
* Document Collection
* Analytics Dashboard
* Follow-up Campaigns
* Custom API Integrations

---

# 9. Deliverables

Every deployment includes:

* WhatsApp AI Agent
* Business Knowledge Base
* Lead Qualification
* Property Discovery
* Showing Booking
* Conversation Memory
* Business Configuration
* Testing & Go-Live
* Hosted Infrastructure

---

# 10. Customer Outcomes

Instead of selling features, Lysa sells outcomes.

Customers receive:

* Faster response times
* More qualified leads
* More booked showings
* Better customer experience
* Less administrative work
* Higher conversion rates
* AI available 24/7

---

# 11. Technical Architecture

```
Customer
      │
WhatsApp
      │
Lysa AI
      │
────────────────────────────
Lead Qualification

Knowledge

Property Discovery

Booking

Memory
────────────────────────────
      │
Supabase Database
      │
───────────────
Leads

Memory

Conversations

Knowledge
───────────────
      │
Optional Integrations
```

### Optional Integrations

* GoHighLevel
* HubSpot
* Google Calendar
* Outlook
* Gmail
* Google Sheets
* Airtable
* Zapier
* Make

---

# 12. Pricing

## Deployment

**$450**
One-time

Includes:

* Configuration
* WhatsApp setup
* Knowledge upload
* Deployment
* Testing

---

## Lysa

**$79/month**

Includes:

* Hosting
* AI usage
* Maintenance
* Monitoring
* Updates
* Priority Support

---

# 13. Website Structure

1. Hero
2. Outcomes
3. Capabilities
4. Interactive Demo
5. How It Works
6. Pricing
7. FAQ
8. Final CTA

Primary CTA throughout:

> **Book a Demo**

---

# 14. Product Positioning

Lysa is **not**:

* A chatbot
* A custom software project
* An automation agency

Lysa **is**:

* An AI employee
* A deployable software product
* A managed AI platform
* A Service-as-Software solution

---

# 15. Future Roadmap

### V1

* WhatsApp
* Lead Qualification
* Knowledge
* Property Discovery
* Showing Booking
* Memory

### V2

* CRM integrations
* Property valuation
* Email & SMS
* Analytics
* Multi-agent support

### V3

* Voice AI
* Multi-language support
* Mobile admin portal
* Team collaboration
* Advanced reporting
* Cross-channel conversations (WhatsApp, Instagram, Messenger, Telegram, Email)

This PRD is intentionally scoped around an MVP that can be deployed repeatedly with minimal custom development, reinforcing Lysa as a productized, Service-as-Software offering rather than a bespoke agency service.
