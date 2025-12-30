# SEO Audit & Improvement Recommendations
**Date:** December 30, 2024  
**Based on:** SEO Gets data for thatchedroofinsurance.co.uk

## Current Performance Summary

### Overall Metrics
- **Impressions:** 604
- **Clicks:** 0
- **Average Position:** 76.6
- **CTR:** 0%

### Key Findings from SEO Gets Data

#### Queries with Good Positions but 0 Clicks
1. **"grade 2 listed thatched cottage insurance"** - Position 28.9, 13 impressions, 0 clicks
2. **"cheap thatched roof home insurance"** - Position 46.3, 3 impressions, 0 clicks
3. **"cost of thatched roof insurance"** - Position 48, 1 impression, 0 clicks
4. **"average cost of insuring a thatched cottage"** - Position 79, 1 impression, 0 clicks
5. **"insurance for thatched cottages"** - Position 94.2, 5 impressions, 0 clicks

#### Page Performance Issues
1. **Homepage (`/`)** - Position 76.4-80.7 (472 impressions, 0 clicks) - **CRITICAL**
2. **Contents Insurance (`/contents-insurance`)** - Position 95.4 (20 impressions, 0 clicks) - **CRITICAL**
3. **Blog post** - One post at position 6 (good, but needs more content like this)

---

## Priority SEO Improvements

### 🔴 CRITICAL PRIORITY

#### 1. Homepage Optimization (Position 76-80 → Target: Top 30)

**Current Issues:**
- Generic title and description
- Missing target keywords in H1
- No clear keyword focus

**Recommended Changes:**

**Update `src/app/page.tsx` Hero section:**
- Change H1 from "Specialist Insurance for Your Thatched Property" to:
  - **"Thatched Roof Insurance UK | Specialist Cover for Thatched Properties"**
- Add keyword-rich subheading: "Get expert thatched cottage insurance quotes. Cover for Grade II listed properties, fire safety compliance, and specialist rebuild costs."

**Update `src/app/layout.tsx` metadata:**
```typescript
title: "Thatched Roof Insurance UK | Specialist Cover | Get Quote Today"
description: "Specialist thatched roof insurance for UK properties. Expert cover for Grade II listed cottages, fire safety compliance, and specialist rebuild costs. Get your quote today. Rated 4.9/5."
```

**Add keyword-rich content sections:**
- Add a section targeting "thatched roof insurance UK"
- Add FAQ targeting "cheap thatched roof home insurance"
- Add content targeting "grade 2 listed thatched cottage insurance"

#### 2. Contents Insurance Page (Position 95.4 → Target: Top 50)

**Current Issues:**
- Very poor ranking
- May lack keyword density
- Missing internal links from high-authority pages

**Recommended Changes:**

**Update `src/app/contents-insurance/page.tsx`:**

1. **Improve H1:**
   - Change to: **"Thatched Property Contents Insurance | Specialist Cover for Period Homes"**

2. **Enhance meta description:**
   - "Specialist contents insurance for thatched and period properties. Cover for antiques, valuables, and high-value items. Get a quote for your Grade II listed cottage contents insurance today."

3. **Add keyword-rich content:**
   - Add section: "Contents Insurance for Grade II Listed Thatched Cottages"
   - Add section: "High-Value Contents Cover for Period Properties"
   - Add internal links from homepage and blog posts

4. **Add internal links:**
   - Link from homepage "What We Cover" section
   - Link from relevant blog posts
   - Add breadcrumb navigation

#### 3. Improve CTR for Queries with Good Positions

**For "grade 2 listed thatched cottage insurance" (Position 28.9):**

1. **Create/optimize blog post targeting this query:**
   - Ensure "Grade II Thatched Cottage Insurance: Checklist Before You Get a Quote" is optimized
   - Add to homepage featured articles
   - Add internal links from homepage

2. **Update meta description to be more compelling:**
   - Current: Generic
   - New: "Grade II listed thatched cottage insurance checklist. Expert guide to getting specialist cover for listed properties. Get your quote today."

**For "cheap thatched roof home insurance" (Position 46.3):**

1. **Create dedicated content section:**
   - Add FAQ: "How to get cheap thatched roof home insurance"
   - Link to blog post: "7 Proven Ways to Reduce the Cost of Insuring a Thatched Cottage"

2. **Update homepage to mention cost-saving:**
   - Add trust element: "Competitive quotes for thatched properties"
   - Link to cost-reduction blog post

---

### 🟡 HIGH PRIORITY

#### 4. Internal Linking Strategy

**Current State:** Limited internal linking between pages

**Improvements:**

1. **Add internal links to homepage:**
   - Link to contents-insurance from "What We Cover" section
   - Link to buildings-insurance prominently
   - Link to top-performing blog posts (Grade II, cost reduction)

2. **Add contextual links in blog posts:**
   - Ensure all blog posts link to relevant service pages
   - Add "Related Services" section to blog posts
   - Link from blog posts to quote form

3. **Add footer links:**
   - Ensure all service pages are in footer
   - Add location pages to footer

#### 5. Meta Description Optimization

**Current Issue:** Generic descriptions don't encourage clicks

**Recommended Updates:**

**Homepage:**
- Current: "Specialist thatched roof insurance for UK properties..."
- New: "Get specialist thatched roof insurance quotes in minutes. Cover for Grade II listed cottages, fire safety compliance, and specialist rebuild costs. Rated 4.9/5. Get your quote today."

**Contents Insurance:**
- New: "Specialist contents insurance for thatched properties. Cover for antiques, valuables, and high-value items in Grade II listed cottages. Get a quote today."

**Blog Posts:**
- Ensure each has unique, compelling meta description
- Include call-to-action in descriptions
- Include target keyword naturally

#### 6. Page Title Optimization

**Current Issues:**
- Some titles too generic
- Missing location/keyword modifiers

**Recommended Updates:**

**Buildings Insurance:**
- Current: "Buildings Insurance for Thatched Properties | Specialist Cover"
- New: "Thatched Roof Buildings Insurance UK | Specialist Cover for Listed Properties"

**Combined Insurance:**
- Current: "Combined Buildings & Contents Insurance for Thatched Properties"
- New: "Combined Thatched Property Insurance | Buildings & Contents Cover UK"

#### 7. Add More Content to Thin Pages

**Pages Needing More Content:**

1. **Contents Insurance:**
   - Add FAQ section
   - Add case studies/examples
   - Add "Why Thatched Properties Need Specialist Contents Cover" section
   - Add internal links to relevant blog posts

2. **Buildings Insurance:**
   - Add more detail about rebuild costs
   - Add section on listed building requirements
   - Add more internal links

3. **Location Pages:**
   - Add more location-specific content
   - Add local thatched property statistics
   - Add internal links to relevant blog posts

---

### 🟢 MEDIUM PRIORITY

#### 8. Structured Data Enhancements

**Current:** FAQ schema on homepage, Article schema on blog posts

**Add:**

1. **Service schema** on service pages:
   - Add Service schema to buildings-insurance, contents-insurance, combined-insurance
   - Include price range, service area, etc.

2. **BreadcrumbList schema:**
   - Already have breadcrumbs visually, but add structured data

3. **Organization schema:**
   - Enhance LocalBusiness schema with more details
   - Add review ratings

#### 9. Image Optimization

**Current:** Images are optimized but alt text could be improved

**Improvements:**

1. **Add keyword-rich alt text:**
   - Blog images: Include target keywords naturally
   - Service page images: Include service keywords

2. **Add image schema:**
   - Use ImageObject schema for featured images

#### 10. URL Structure

**Current:** Good structure, but could add keyword-rich slugs

**Consider:**
- `/thatched-roof-insurance-uk` (if creating pillar page)
- Ensure all location pages have consistent structure

#### 11. Content Gaps

**Missing Content Opportunities:**

1. **"Cheap thatched roof insurance"** - Create dedicated section or blog post
2. **"Thatched roof insurance cost"** - Already have blog post, but ensure it's linked from homepage
3. **"Grade II listed thatched insurance"** - Optimize existing blog post and link prominently

---

## Quick Wins (Implement First)

### 1. Homepage H1 Update
**File:** `src/components/Hero.tsx`
**Change:** Update H1 to include "Thatched Roof Insurance UK"

### 2. Homepage Meta Description
**File:** `src/app/layout.tsx`
**Change:** Make description more compelling with CTAs

### 3. Contents Insurance Page Title
**File:** `src/app/contents-insurance/page.tsx`
**Change:** Add "UK" and "Grade II" to title

### 4. Add Internal Links to Homepage
**File:** `src/components/WhatWeCover.tsx` or homepage
**Change:** Add prominent links to contents-insurance and buildings-insurance

### 5. Optimize Blog Post Meta Descriptions
**File:** `src/app/blog/[slug]/page.tsx`
**Change:** Ensure all blog posts have unique, compelling descriptions

### 6. Add FAQ to Contents Insurance Page
**File:** `src/app/contents-insurance/page.tsx`
**Change:** Add FAQ section targeting "contents insurance for thatched properties"

---

## Technical SEO

### Current Status: ✅ Good
- Canonical URLs set
- Sitemap generated
- Open Graph tags
- Twitter cards
- Structured data (FAQ, Article)
- Mobile responsive

### Additional Recommendations:

1. **Add lastModified dates to sitemap:**
   - Update `src/app/sitemap.ts` to use actual article dates

2. **Add robots.txt enhancements:**
   - Ensure important pages are crawlable
   - Block unnecessary paths

3. **Page speed:**
   - Already optimized with Next.js Image
   - Consider adding loading="lazy" to below-fold images

---

## Content Strategy for Rankings

### Target Keywords (Based on Current Positions)

**High Priority:**
1. "thatched roof insurance" (homepage - improve from position 76)
2. "grade 2 listed thatched cottage insurance" (position 28.9 - improve CTR)
3. "cheap thatched roof home insurance" (position 46.3 - improve ranking)
4. "contents insurance for thatched properties" (position 95.4 - critical)

**Medium Priority:**
5. "thatched cottage insurance" (position 94.2)
6. "cost of thatched roof insurance" (position 48)
7. "thatched property insurance UK"

### Content Additions Needed

1. **Homepage:**
   - Add section: "Why Choose Specialist Thatched Roof Insurance"
   - Add section: "Coverage for Grade II Listed Properties"
   - Add section: "Competitive Quotes for Thatched Properties"

2. **Contents Insurance:**
   - Add 500+ words of unique content
   - Add FAQ section
   - Add "Contents Insurance for Listed Properties" section

3. **Blog Posts:**
   - Ensure all target keywords are covered
   - Add internal links to service pages
   - Add "Get a Quote" CTAs in blog posts

---

## Backlink Strategy (You mentioned working on this)

### Current Focus Areas:

1. **Insurance industry directories:**
   - Submit to UK insurance directories
   - Get listed in specialist property insurance directories

2. **Thatched property associations:**
   - Reach out to thatched property owner associations
   - Get featured in heritage property publications

3. **Local business directories:**
   - Ensure consistent NAP (Name, Address, Phone) across directories
   - Get listed in local business directories for each location

4. **Guest posting:**
   - Write for property/insurance blogs
   - Target heritage property websites
   - Target UK property owner forums

5. **Resource pages:**
   - Get listed on "thatched property resources" pages
   - Get featured in "specialist insurance" resource lists

---

## Monitoring & Tracking

### Set Up:
1. Google Search Console - Monitor query performance
2. Track positions for target keywords monthly
3. Monitor CTR improvements
4. Track backlink acquisition

### Key Metrics to Watch:
- Homepage position (target: <30)
- Contents insurance position (target: <50)
- CTR for "grade 2 listed thatched cottage insurance" (target: >2%)
- Overall impressions growth
- Overall clicks growth

---

## Implementation Priority

### Week 1 (Critical):
1. ✅ Update homepage H1 and meta description
2. ✅ Optimize contents-insurance page title and description
3. ✅ Add internal links from homepage to service pages
4. ✅ Update blog post meta descriptions

### Week 2 (High Priority):
5. Add FAQ section to contents-insurance page
6. Add more content to contents-insurance page
7. Optimize blog post internal linking
8. Add structured data to service pages

### Week 3-4 (Medium Priority):
9. Create additional content sections
10. Enhance location pages
11. Continue backlink building
12. Monitor and adjust based on results

---

## Notes

- All blog articles are now organized chronologically (1 per month backwards from December 2024)
- Articles are sorted by date (newest first) on blog index page
- Focus on improving CTR for queries with good positions but 0 clicks
- Priority: Homepage and Contents Insurance page optimization

