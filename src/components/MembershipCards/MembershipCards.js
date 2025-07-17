// components/MembershipCards.tsx
import React from 'react';

const data = [
  {
    icon: '👥',
    title: 'Membership Organisations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    icon: '🏢',
    title: 'National Associations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    icon: '🔄',
    title: 'Clubs And Groups',
    description: 'Our membership management software provides full automation of membership renewals and payments',
  },
];

const MembershipCards = () => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Manage your entire community in a single system
      </h2>
      <p style={{ marginTop: '0.5rem', color: '#555' }}>Who is Nextcent suitable for?</p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              width: '300px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ fontSize: '2rem' }}>{item.icon}</div>
            <h3 style={{ marginTop: '1rem' }}>{item.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipCards;
