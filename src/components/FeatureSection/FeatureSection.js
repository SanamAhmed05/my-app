import Image from 'next/image';
import React from 'react';

const FeatureSection = () => {
  return (
    <section style={{ display: 'flex', alignItems: 'center', padding: '4rem 2rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {/* Image Section */}
      <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
        <Image
          src="/assets/hero.jpg" // replace with your actual image name
          alt="Feature Illustration"
          width={400}
          height={400}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      {/* Text Section */}
      <div style={{ flex: '1 1 400px', padding: '1rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          The unseen of spending three years at Pixelgrade
        </h2>
        <p style={{ marginTop: '1rem', lineHeight: '1.6', color: '#555' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. 
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <button style={{
          marginTop: '2rem',
          backgroundColor: '#28a745',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
        }}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
