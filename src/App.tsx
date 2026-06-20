import { useState, useEffect } from 'react';
import { ConfigProvider, theme as antdTheme, Form, Input, Button, Result, Card } from 'antd';
import { 
  ExperimentOutlined, 
  SafetyCertificateOutlined, 
  CloudServerOutlined, 
  GlobalOutlined, 
  MailOutlined, 
  ArrowRightOutlined
} from '@ant-design/icons';

const COMPANY_NAME = "KS DIGITAL VENTURES PTY LTD";
const ABN = "23 697 667 520";
const ACN = "697 667 520";
const DUNS = "352161621";
const EMAIL = "admin@syncbits.me";

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms' | 'support'>('home');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [contactForm] = Form.useForm();

  // Handle Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['privacy', 'terms', 'support'].includes(hash)) {
        setCurrentView(hash as any);
      } else {
        setCurrentView('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run once on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Force dark theme attribute on document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Form Submission
  const onFinish = (values: any) => {
    console.log('Form Submitted:', values);
    setFormSubmitted(true);
    contactForm.resetFields();
  };

  // Ant Design Custom Theme Configuration (Static Dark Mode)
  const antdPrimaryColor = '#6366F1';
  const antdBgColor = '#111827';
  const antdLinkColor = '#22D3EE';

  return (
    <ConfigProvider
      theme={{
        algorithm: antdTheme.darkAlgorithm,
        token: {
          colorPrimary: antdPrimaryColor,
          colorLink: antdLinkColor,
          fontFamily: 'Inter, sans-serif',
          borderRadius: 6,
          colorBgContainer: antdBgColor,
        },
      }}
    >
      <div className="app-container">
        {/* Header Section */}
        <header className="site-header">
          <div className="container">
            <div className="header-inner">
              <a href="#/" className="logo-link">
                <span className="logo-text">KS Digital Ventures</span>
              </a>

              <nav className="nav-links">
                <a href="#/" className={`nav-item ${currentView === 'home' ? 'active' : ''}`}>Home</a>
                <a href="#/#portfolio" className="nav-item">Ventures</a>
                <a href="#/#about" className="nav-item">About</a>
                <a href="#/support" className={`nav-item ${currentView === 'support' ? 'active' : ''}`}>Support</a>

                <a href="#/support" className="btn-premium" style={{ height: '40px', padding: '0 20px', fontSize: '0.9rem' }}>
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main className="main-content">
          {/* HOME VIEW */}
          {currentView === 'home' && (
            <>
              {/* Hero Section */}
              <section className="hero-section">
                <div className="container">
                  <div className="hero-grid">
                    <div className="hero-content">
                      <div className="hero-subtitle">Venture Studio & Lab</div>
                      <h1 className="hero-title">Investing in digital longevity.</h1>
                      <p className="hero-desc">
                        KS Digital Ventures PTY LTD designs, builds, and deploys high-performance digital products, secure cloud systems, and utility platforms designed to scale.
                      </p>
                      <div className="hero-actions">
                        <a href="#/#portfolio" className="btn-premium">Explore Portfolio <ArrowRightOutlined style={{ marginLeft: 8 }} /></a>
                        <a href="#/support" className="btn-outline">Get in Touch</a>
                      </div>
                    </div>

                    <div className="hero-graphic">
                      <div className="hero-circle-deco"></div>
                      <div className="hero-card">
                        <ExperimentOutlined className="hero-card-icon" />
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Venture Design</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          We incubate ideas and transform them into enterprise-ready platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pillars Section */}
              <section className="section" style={{ backgroundColor: 'rgba(197, 168, 128, 0.03)' }}>
                <div className="container">
                  <div className="section-tag">Core Principles</div>
                  <h2 className="section-title">How We Build</h2>
                  <p className="section-desc">
                    We align utility and modern engineering to establish enduring digital services.
                  </p>

                  <div className="pillars-grid">
                    <div className="pillar-item">
                      <div className="pillar-number">01</div>
                      <h3 className="pillar-title">Clarity & Simplicity</h3>
                      <p className="pillar-desc">
                        We strip away the noise. Our platforms are built to perform specific tasks with extreme reliability.
                      </p>
                    </div>

                    <div className="pillar-item">
                      <div className="pillar-number">02</div>
                      <h3 className="pillar-title">Uncompromising Security</h3>
                      <p className="pillar-desc">
                        Every system is engineered from day one with strict data privacy controls and zero-trust cloud foundations.
                      </p>
                    </div>

                    <div className="pillar-item">
                      <div className="pillar-number">03</div>
                      <h3 className="pillar-title">Australian Standards</h3>
                      <p className="pillar-desc">
                        Registered and operated under strict Australian regulatory standards, serving global clients securely.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Ventures Portfolio Section */}
              <section id="portfolio" className="section">
                <div className="container">
                  <div className="section-tag">Our Products</div>
                  <h2 className="section-title">Venture Portfolio</h2>
                  <p className="section-desc">
                    Below is our flagship technology infrastructure currently deployed and managed under our business umbrella.
                  </p>

                  <div className="ventures-grid">
                    <div className="venture-card">
                      <div className="venture-icon">
                        <CloudServerOutlined />
                      </div>
                      <div className="venture-badge">Active Production</div>
                      <h3 className="venture-title">Syncbits</h3>
                      <p>
                        Syncbits is our secure cloud integration and background process hub. It acts as the operational core of our studio, serving as a unified system pipeline for user authentication, encrypted file synchronization, and database backups.
                      </p>
                      <div className="venture-tech">
                        <span className="tech-tag">Cloud Backups</span>
                        <span className="tech-tag">Encrypted Storage</span>
                        <span className="tech-tag">Core Infrastructure</span>
                      </div>
                    </div>

                    <div className="venture-card">
                      <div className="venture-icon">
                        <SafetyCertificateOutlined />
                      </div>
                      <div className="venture-badge">Internal Release</div>
                      <h3 className="venture-title">KS Identity</h3>
                      <p>
                        A proprietary authentication middleware implementing secure OAuth2 pipelines. Designed to manage access control across all KS Digital Ventures products, ensuring compliant data privacy practices.
                      </p>
                      <div className="venture-tech">
                        <span className="tech-tag">OAuth2</span>
                        <span className="tech-tag">Zero-Trust Identity</span>
                        <span className="tech-tag">API Security</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* About Section */}
              <section id="about" className="section" style={{ backgroundColor: 'rgba(30, 63, 53, 0.02)' }}>
                <div className="container">
                  <div className="section-tag">Who We Are</div>
                  <h2 className="section-title">About the Studio</h2>
                  <p className="section-desc">
                    KS Digital Ventures PTY LTD is a privately held Australian technology holding and development company.
                  </p>

                  <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.15rem', marginBottom: '32px', lineHeight: '1.8' }}>
                      We specialize in early-stage software incubation. By combining modern cloud architecture with custom operational workflows, we build digital systems that automate business cores. Our team manages product design, cloud deployment, and long-term maintenance of web and mobile software utilities.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
                      <div>
                        <h4 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-serif)' }}>2026</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Established</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-serif)' }}>100%</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Australian Owned</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', fontFamily: 'var(--font-serif)' }}>2+</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Core Ventures</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* SUPPORT VIEW */}
          {currentView === 'support' && (
            <div className="container" style={{ padding: '80px 24px 120px' }}>
              <div className="policy-header">
                <div className="section-tag">Help Desk</div>
                <h1 className="policy-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)' }}>Support Center</h1>
                <p className="policy-meta">Contact {COMPANY_NAME} support team</p>
              </div>

              <div className="contact-grid">
                <div className="contact-card">
                  {formSubmitted ? (
                    <Result
                      status="success"
                      title="Support Ticket Created"
                      subTitle={`Thank you. We have received your inquiry and a confirmation has been sent. We typically respond to admin@syncbits.me correspondence within 1 business day.`}
                      extra={[
                        <Button type="primary" key="home" onClick={() => { setFormSubmitted(false); window.location.hash = '#/'; }}>
                          Return Home
                        </Button>,
                        <Button key="back" onClick={() => setFormSubmitted(false)}>
                          Send Another Message
                        </Button>,
                      ]}
                    />
                  ) : (
                    <>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send us a Message</h3>
                      <Form
                        form={contactForm}
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark="optional"
                      >
                        <Form.Item
                          label="Your Name"
                          name="name"
                          rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                          <Input placeholder="John Doe" size="large" />
                        </Form.Item>

                        <Form.Item
                          label="Email Address"
                          name="email"
                          rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email address' }
                          ]}
                        >
                          <Input placeholder="name@company.com" size="large" />
                        </Form.Item>

                        <Form.Item
                          label="Subject"
                          name="subject"
                          rules={[{ required: true, message: 'Please select or type a subject' }]}
                        >
                          <Input placeholder="How can we help you?" size="large" />
                        </Form.Item>

                        <Form.Item
                          label="Message"
                          name="message"
                          rules={[{ required: true, message: 'Please type your message' }]}
                        >
                          <Input.TextArea rows={6} placeholder="Describe your request in detail..." size="large" />
                        </Form.Item>

                        <Form.Item>
                          <Button type="primary" htmlType="submit" size="large" style={{ width: '100%', height: '48px', fontWeight: 600 }}>
                            Submit Ticket
                          </Button>
                        </Form.Item>
                      </Form>
                    </>
                  )}
                </div>

                <div className="info-sidebar">
                  <div className="info-block">
                    <h3>Corporate Information</h3>
                    <ul className="info-list">
                      <li>
                        <span className="info-label">Entity Name</span>
                        <span className="info-value" style={{ fontSize: '0.85rem' }}>{COMPANY_NAME}</span>
                      </li>
                      <li>
                        <span className="info-label">ABN</span>
                        <span className="info-value">{ABN}</span>
                      </li>
                      <li>
                        <span className="info-label">ACN</span>
                        <span className="info-value">{ACN}</span>
                      </li>
                      <li>
                        <span className="info-label">DUNS Number</span>
                        <span className="info-value">{DUNS}</span>
                      </li>
                      <li>
                        <span className="info-label">Location</span>
                        <span className="info-value">Victoria, Australia</span>
                      </li>
                    </ul>
                  </div>

                  <div className="info-block">
                    <h3>Direct Inquiries</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <MailOutlined style={{ fontSize: '18px', color: 'var(--secondary-color)' }} />
                        <div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Address</div>
                          <a href={`mailto:${EMAIL}`} style={{ color: 'var(--text-color)', fontWeight: 600 }}>{EMAIL}</a>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <GlobalOutlined style={{ fontSize: '18px', color: 'var(--secondary-color)' }} />
                        <div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Developer Portal</div>
                          <span style={{ fontWeight: 600 }}>syncbits.me</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div style={{ marginTop: '80px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
                  <Card bordered={true}>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--primary-color)' }}>
                      What is the relationship between KS Digital Ventures and Syncbits?
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                      KS Digital Ventures Pty Ltd is the registered corporate entity that owns, hosts, and operates the Syncbits software platform. Syncbits acts as our primary cloud pipeline and background backup tool across all of our digital properties.
                    </p>
                  </Card>
                  
                  <Card bordered={true}>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--primary-color)' }}>
                      How do I request account deletion or data exports?
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                      Users of any of our hosted utilities can request data exports or permanent account deletion by contacting support via the contact form above, or by directly writing to our administrative inbox at admin@syncbits.me.
                    </p>
                  </Card>

                  <Card bordered={true}>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: '8px', color: 'var(--primary-color)' }}>
                      Where is customer data stored?
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                      We store all customer data and synchronization backups on secure servers located in Sydney, Australia, complying with local Australian Privacy Principles (APPs).
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* PRIVACY POLICY VIEW */}
          {currentView === 'privacy' && (
            <div className="container">
              <div className="policy-container">
                <div className="policy-header">
                  <h1 className="policy-title">Privacy Policy</h1>
                  <p className="policy-meta">Last Updated: June 19, 2026</p>
                </div>

                <div className="policy-body">
                  <p>
                    At <strong>{COMPANY_NAME}</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web and mobile applications, including <strong>Syncbits</strong> and related digital utilities.
                  </p>
                  
                  <h2>1. Information We Collect</h2>
                  <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
                  <ul>
                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, billing address, email address (including logins associated with <code>admin@syncbits.me</code>), and telephone number, which you voluntarily give to us when you register or contact support.</li>
                    <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card brand, expiration date) that we may collect when you purchase, order, or request services.</li>
                    <li><strong>System & Device Data:</strong> Information our servers automatically collect when you access our platforms, such as your IP address, browser type, operating system, and access times.</li>
                  </ul>

                  <h2>2. Use of Your Information</h2>
                  <p>Having accurate information about you allows us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
                  <ul>
                    <li>Create and manage your user account.</li>
                    <li>Process payments and subscriptions securely.</li>
                    <li>Perform data backups and cloud synchronizations.</li>
                    <li>Email you regarding account updates, system logs, or support tickets.</li>
                    <li>Prevent fraudulent transactions and secure our infrastructure.</li>
                  </ul>

                  <h2>3. Disclosure of Your Information</h2>
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share information we have collected about you in certain situations, including:</p>
                  <ul>
                    <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, or to protect the rights, property, and safety of others.</li>
                    <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, such as payment processing, cloud hosting (e.g. AWS), data analysis, email delivery, and customer service.</li>
                  </ul>

                  <h2>4. Security of Your Information</h2>
                  <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. All customer data synced through Syncbits is encrypted in transit and at rest using industry-standard protocols. However, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or misuse.
                  </p>

                  <h2>5. Your Rights & Choices</h2>
                  <p>
                    Under Australian Privacy Principles (APPs) and applicable international laws (like GDPR), you have the right to access, correct, or delete your personal data held by us. You can request a full data export or delete your account at any time by contacting our privacy officer at <strong>{EMAIL}</strong>.
                  </p>

                  <h2>6. Contact Us</h2>
                  <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                  <p style={{ marginTop: '10px', paddingLeft: '16px', borderLeft: '3px solid var(--secondary-color)' }}>
                    <strong>{COMPANY_NAME}</strong><br />
                    ABN: {ABN}<br />
                    Email: <a href={`mailto:${EMAIL}`} style={{ color: 'var(--primary-color)', fontWeight: 600 }}>{EMAIL}</a><br />
                    Victoria, Australia
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TERMS OF SERVICE VIEW */}
          {currentView === 'terms' && (
            <div className="container">
              <div className="policy-container">
                <div className="policy-header">
                  <h1 className="policy-title">Terms of Service</h1>
                  <p className="policy-meta">Last Updated: June 19, 2026</p>
                </div>

                <div className="policy-body">
                  <p>
                    Welcome to <strong>{COMPANY_NAME}</strong>. These Terms of Service ("Terms") govern your access to and use of our website, applications, and services, including the <strong>Syncbits</strong> synchronization infrastructure.
                  </p>
                  <p>
                    By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use our services.
                  </p>

                  <h2>1. User Accounts</h2>
                  <p>
                    To access certain features of our software, you may be required to register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and account credentials.
                  </p>

                  <h2>2. Acceptable Use Policy</h2>
                  <p>You agree not to use our services to:</p>
                  <ul>
                    <li>Violate any local, state, national, or international law or regulation.</li>
                    <li>Transmit any data that contains software viruses, malware, or any other harmful code.</li>
                    <li>Attempt to gain unauthorized access to our servers, databases, or cloud accounts.</li>
                    <li>Interfere with or disrupt the integrity or performance of the Syncbits synchronization engine.</li>
                  </ul>

                  <h2>3. Subscription Fees and Payment</h2>
                  <p>
                    Certain utilities may require paid subscriptions. You agree to pay all fees associated with your account on time. All payments will be processed securely through our authorized payment processors. Unless specified otherwise, subscriptions will automatically renew at the end of each billing cycle.
                  </p>

                  <h2>4. Intellectual Property Rights</h2>
                  <p>
                    The services and their original content, features, software, codebase, and design elements are and will remain the exclusive property of <strong>{COMPANY_NAME}</strong> and its licensors. Our trademarks, logos, and brand identity may not be used in connection with any product or service without our prior written consent.
                  </p>

                  <h2>5. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, <strong>{COMPANY_NAME}</strong> shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of, or inability to access or use, the services.
                  </p>

                  <h2>6. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of Victoria, Australia, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Victoria.
                  </p>

                  <h2>7. Contact Information</h2>
                  <p>If you have any questions about these Terms, please contact us at:</p>
                  <p style={{ marginTop: '10px', paddingLeft: '16px', borderLeft: '3px solid var(--secondary-color)' }}>
                    <strong>{COMPANY_NAME}</strong><br />
                    ABN: {ABN}<br />
                    Email: <a href={`mailto:${EMAIL}`} style={{ color: 'var(--primary-color)', fontWeight: 600 }}>{EMAIL}</a><br />
                    Victoria, Australia
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer Section */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <h2>{COMPANY_NAME}</h2>
                <p>
                  Boutique technology studio designing, building, and operating secure web and mobile applications under the Syncbits software umbrella.
                </p>
                <ul className="footer-details">
                  <li>ABN: {ABN}</li>
                  <li>ACN: {ACN}</li>
                  <li>D-U-N-S Number: {DUNS}</li>
                  <li>Corporate Inbox: {EMAIL}</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
                <div className="footer-nav">
                  <div className="footer-nav-title">Company</div>
                  <a href="#/" className="footer-link">Home</a>
                  <a href="#/#portfolio" className="footer-link">Ventures</a>
                  <a href="#/#about" className="footer-link">About Us</a>
                  <a href="#/support" className="footer-link">Support Desk</a>
                </div>

                <div className="footer-nav">
                  <div className="footer-nav-title">Legal & Trust</div>
                  <a href="#/privacy" className="footer-link">Privacy Policy</a>
                  <a href="#/terms" className="footer-link">Terms of Service</a>
                  <span className="footer-link" style={{ cursor: 'default', opacity: 0.8 }}>Registered: Victoria, AU</span>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div>
                © 2026 {COMPANY_NAME}. All rights reserved.
              </div>
              <div className="footer-bottom-links">
                <a href="#/privacy" className="footer-bottom-link">Privacy</a>
                <a href="#/terms" className="footer-bottom-link">Terms</a>
                <a href="#/support" className="footer-bottom-link">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ConfigProvider>
  );
}

export default App;
