'use strict';

module.exports = {
  app: {
    title: 'Ayuda',
    description: 'The Peer Mentorship and Student Success Platform',
    keywords: 'mongodb, express, angularjs, node.js, mongoose, passport',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  templateEngine: 'swig',
  sessionSecret: 'MEAN',
  sessionCollection: 'sessions',
  logo: 'modules/core/img/brand/logo.png',
  favicon: 'modules/core/img/brand/favicon.ico',
  //smtp: 'smtps://drexelayuda%40gmail.com:Ayuda2016@smtp.gmail.com'
  //smtp: 'smtps://drexelayuda:Ayuda2016@smtp.gmail.com'
};
