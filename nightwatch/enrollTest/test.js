module.exports = {
  tags: ['SFU']
  'Automated enroll SFU' : function (client) {
    client
      .url('sis.sfu.ca')
      .pause(1000);
      
    client.expect.element('body').to.be.present;

    client.end();
  }
}
