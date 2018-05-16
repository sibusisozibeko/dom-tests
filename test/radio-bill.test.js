describe('The CheckRadio function', function(){

    it('should return an amount of a call when clicked to a call radio button', function(){
      var radios = CheckRadio();
      radios.check('call');
      assert.equal(radios.phone(), '2.75');
  });

        it('should return an amount of an sms when clicked to a sms radio button', function(){
        var radios = CheckRadio();
        radios.check('sms')
          assert.equal(radios.texting(), '0.75');
  });


      it('should return an amount of an sms and call added together', function(){
      var radios = CheckRadio();
       radios.check('call,sms')
        assert.equal(radios.tot(), '0');
    });
});
