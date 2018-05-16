describe('The TextBill function', function(){

    it('should return an amount of a call when you enter a bill type', function(){
var textBilling = TextBill();
textBilling.text('call');
         assert.equal(textBilling.col(), '2.75');
        });

        it('should return an amount of an sms when you enter a bill type', function(){
var textBilling = TextBill();
textBilling.text('sms')
          assert.equal(textBilling.mms(), '0.75');
      });


      it('should return an amount of an sms and call added together', function(){
var textBilling = TextBill();
textBilling.text('call,sms')
        assert.equal(textBilling.bill(), 0);
    });
});
