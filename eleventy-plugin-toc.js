import { JSDOM } from "jsdom";

export default function (content) {
  const doc = new JSDOM(content);
  const headers = doc.window.document.querySelectorAll("h2,h3,h4,h5,h6");

  const toc = [];
  let currentSection = null;

  for (const header of headers) {
    const level = parseInt(header.tagName.substring(1), 10);
    const text = header.textContent.trim();
    const id = header.id || text.toLowerCase().replace(/\s+/g, "-");
    const link = `<a style="display: inline-block;" href="#${id}">${text}</a>`;

    if (level === 2) {
      currentSection = { title: text, link, subsections: [] };
      toc.push(currentSection);
    } else if (currentSection) {
      currentSection.subsections.push({ title: text, link });
    }
  }

  if (toc.length === 0) return "";

  return `
    <aside>
      <details class="sidebar">
        <summary>Navigation</summary>
        <nav>
          <ul>
            ${toc.map((section) => `
              <li>
                ${section.subsections.length > 0 ? `
                <details>
                  <summary>${section.link}</summary>
                  <ul>
                    ${section.subsections.map((sub) => `<li>${sub.link}</li>`).join("")}
                  </ul>
                </details>` : section.link}
              </li>`).join("")}
          </ul>
        </nav>
      </details>
    </aside>
  `;
}
