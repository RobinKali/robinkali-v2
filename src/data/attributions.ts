export type AttributionProject = {
  name: string;
  authorLabel: string;
  author: string;
  versionLabel: string;
  version: string;
  repositoryLabel: string;
  repositoryUrl: string;
  repositoryText: string;
  useLabel: string;
  use: string;
  licenseLabel: string;
  license: string;
};

export type AttributionDocument = {
  slug: string;
  path: string;
  title: string;
  description: string;
  status: string;
  identity: string;
  introduction: string[];
  adaptations: {
    heading: string;
    paragraphs: string[];
  };
  projects: AttributionProject[];
  license: {
    heading: string;
    introduction: string;
    copyrightHeading: string;
    copyrightLines: string[];
    text: string;
  };
};

const mitLicenseText = `Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export const attributionDocument: AttributionDocument = {
  slug: "attributions",
  path: "/attributions/",
  title: "Third-party attributions",
  description: "Attribution and license information for open-source assets integrated into this project.",
  status: "Attribution document",
  identity: "ROBIN KALI",
  introduction: [
    "This personal website incorporates open-source libraries and creative WebGL experiments.",
    "This document acknowledges the original authors, projects, and license terms under which those resources are used.",
  ],
  adaptations: {
    heading: "Project adaptations",
    paragraphs: [
      "The custom portfolio architecture, biography layout, and particle title adaptations are project-owned work.",
      "Those adaptations do not transfer ownership of Wormhole Extreme or Three.js code or assets, which remain subject to their original licenses below.",
    ],
  },
  projects: [
    {
      name: "three.js",
      authorLabel: "Author",
      author: "Ricardo Cabello (Mr.doob) and contributors",
      versionLabel: "Version",
      version: "0.185.1",
      repositoryLabel: "Repository",
      repositoryUrl: "https://github.com/mrdoob/three.js",
      repositoryText: "mrdoob/three.js",
      useLabel: "Usage",
      use: "WebGL runtime used for the particle title canvas and 3D space scene rendering.",
      licenseLabel: "License",
      license: "MIT License",
    },
    {
      name: "Wormhole Extreme",
      authorLabel: "Author",
      author: "Rainner Lins",
      versionLabel: "Release",
      version: "2016 Three.js experiment",
      repositoryLabel: "Repository",
      repositoryUrl: "https://github.com/rainner/wormhole-extreme",
      repositoryText: "rainner/wormhole-extreme",
      useLabel: "Usage",
      use: "Interactive 3D space scene loaded through the public/wormhole-home.html shell.",
      licenseLabel: "License",
      license: "MIT License",
    },
  ],
  license: {
    heading: "License terms",
    introduction: "The projects above are redistributed or adapted under the standard MIT License:",
    copyrightHeading: "Copyright notices",
    copyrightLines: [
      "Copyright (c) 2010-2026 three.js authors",
      "Copyright (c) 2016 Rainner Lins (Wormhole Extreme)",
      "Copyright (c) 2026 Robin Kali",
    ],
    text: mitLicenseText,
  },
};
