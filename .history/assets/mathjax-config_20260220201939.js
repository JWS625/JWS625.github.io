window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    processEscapes: true,
    macros: {
      // operators
      argmin: "\\operatorname*{arg\\,min}",
      argmax: "\\operatorname*{arg\\,max}",
      diag: "\\operatorname{diag}",
      tr: "\\operatorname{tr}",
      rank: "\\operatorname{rank}",
      span: "\\operatorname{span}",
      Re: "\\operatorname{Re}",
      Im: "\\operatorname{Im}",

      // common sets
      R: "\\mathbb{R}",
      C: "\\mathbb{C}",

      // bold greek
      vta: "\\boldsymbol{\\alpha}",
      vtb: "\\boldsymbol{\\beta}",
      vtf: "\\boldsymbol{\\phi}",
      vtrf: "\\boldsymbol{\\varphi}",
      vtg: "\\boldsymbol{\\gamma}",
      vtx: "\\boldsymbol{\\xi}",
      vty: "\\boldsymbol{\\psi}",
      vtF: "\\boldsymbol{\\Phi}",
      vtL: "\\boldsymbol{\\Lambda}",
      vtO: "\\boldsymbol{\\Omega}",
      vtS: "\\boldsymbol{\\Sigma}",
      vtX: "\\boldsymbol{\\Xi}",
      vtY: "\\boldsymbol{\\Psi}",

      // bold roman
      va: "\\mathbf{a}",
      vb: "\\mathbf{b}",
      vc: "\\mathbf{c}",
      vg: "\\mathbf{g}",
      vv: "\\mathbf{v}",
      vw: "\\mathbf{w}",
      vx: "\\mathbf{x}",
      vy: "\\mathbf{y}",
      vz: "\\mathbf{z}",
      vB: "\\mathbf{B}",
      vC: "\\mathbf{C}",
      vF: "\\mathbf{F}",
      vG: "\\mathbf{G}",
      vI: "\\mathbf{I}",
      vQ: "\\mathbf{Q}",
      vM: "\\mathbf{M}",
      vU: "\\mathbf{U}",
      vV: "\\mathbf{V}",
      vX: "\\mathbf{X}",
      vY: "\\mathbf{Y}",
      vZ: "\\mathbf{Z}",

      // convenience macros with arguments
      norm: ["\\left\\lVert #1 \\right\\rVert", 1],
      abs:  ["\\left\\lvert #1 \\right\\rvert", 1],
      ip:   ["\\left\\langle #1,\\,#2 \\right\\rangle", 2],

      // differentials / measures
      dd: "\\,\\mathrm{d}"
    }
  },
  svg: { fontCache: 'global' }
};