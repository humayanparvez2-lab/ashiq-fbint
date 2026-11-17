# Redesign the referenced portfolio sections

## What I’ll build
- Refresh the hero with the reference’s dark, high-contrast editorial composition, role label, oversized message, concise introduction, and direct actions while retaining Ashikur’s portrait and existing contact link.
- Rework About as a clean two-column introduction with a prominent business-and-technology statement, focused supporting copy, skill tags, and four live timezone clocks for Dhaka, London, New York, and Dubai.
- Restyle the portfolio as alternating, wide case-study rows with a website preview, project identity, technology summary, concise challenge/role/result, and the existing full case-study dialog and website links.
- Preserve project order, supplied case-study content, responsive behavior, semantic theme tokens, and the site’s monochrome editorial identity.

## Visual direction
- Follow the supplied references: bold black-and-white typography, restrained borders, generous whitespace, compact metadata, and dark/light contrast between sections.
- Adapt the layouts for narrow screens by stacking content and clocks, and keep project previews and case-study actions usable without horizontal scrolling.

## Technical details
- Update the existing Hero, About, and Portfolio sections; reuse the current project data, LiveShot, Dialog, and theme tokens.
- Keep timezone clocks accurate by formatting the current time with the browser’s IANA timezone support and refreshing once per minute.
- Verify the redesigned sections in the running preview at desktop and mobile widths, including opening a case study and checking links and overflow.