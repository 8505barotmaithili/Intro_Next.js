export default function Home() {
  const containerStyle = {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '30px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: '#222',
    lineHeight: 1.8,
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
  };

  const sectionStyle = {
    marginTop: '40px'
  };

  const headingStyle = {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#1a1a1a'
  };

  const ulStyle = {
    paddingLeft: '20px'
  };

  const liStyle = {
    marginBottom: '8px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Next.js</h1>
      <p>
        Next.js is a React-based web framework developed by Vercel that enables developers to build fast,
        scalable, and SEO-friendly web applications. It enhances the standard React experience by adding
        features like server-side rendering, static site generation, and file-based routing.
      </p>

      <div style={sectionStyle}>
        <h1 style={headingStyle}>Key Features of Next.js</h1>
        <ul style={ulStyle}>
          {[
            'File-based Routing',
            'Server-side Rendering (SSR)',
            'Static Site Generation (SSG)',
            'Incremental Static Regeneration (ISR)',
            'API Routes',
            'Built-in CSS and Sass Support',
            'Image Optimization',
            'TypeScript Support',
            'Middleware',
            'App Directory & Server Components'
          ].map((feature, idx) => (
            <li key={idx} style={liStyle}>{feature}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h1 style={headingStyle}>Why Use Next.js?</h1>
        <ul style={ulStyle}>
          {[
            'SEO-friendly (SSR/SSG)',
            'Great developer experience',
            'Optimized performance',
            'Scalable and production-ready'
          ].map((benefit, idx) => (
            <li key={idx} style={liStyle}>{benefit}</li>
          ))}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h1 style={headingStyle}>Next.js vs Create React App (CRA)</h1>
        <ul style={ulStyle}>
          {[
            'SSR / SSG – ✅ Built-in | ❌ Not supported',
            'Routing – ✅ File-based | ❌ Needs React Router',
            'SEO – ✅ Excellent | ❌ Client-side only',
            'API Routes – ✅ Built-in | ❌ Needs backend',
            'Optimization – ✅ Automatic | ❌ Manual',
            'Middleware – ✅ Yes | ❌ No',
            'Deployment – ✅ Vercel-optimized | ✅ Any host',
            'Learning Curve – ⚠️ Slightly steeper | ✅ Easy'
          ].map((comparison, idx) => (
            <li key={idx} style={liStyle}>{comparison}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
