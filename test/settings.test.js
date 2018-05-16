describe('The Setting function', function(){
  it('should return an amount of a call when the amount of a is entered', function(){
      var set = Setting();
      set.billy("call")
       set.up(2.75);
      assert.equal(set.checkcallcost(), 2.75);
    });

     it('should return an amount of an sms when the amount of a is entered', function(){
     var set = Setting();
     set.billy('sms')
     set.cost(0.75)
     assert.equal(set.checksmscost(), 0.75);
  });

     it('should return an amount of an sms and call added together', function(){
     var set = Setting();
     set.billy('sms')
     set.billy('call')
     set.tal(3.50);
     assert.equal(set.checktotalcost(), 3.50);
});

it('should change a colour if warningLevel is more than zero ', function(){
var set = Setting();
set.billy('warningLevel')
set.checkwarning(50)
assert.equal(set.checkwarning(), 50);
});

it('should change a colour if criticalevel is more than zero ', function(){
var set = Setting();
set.billy('criticalevel')
set.crit(80);
assert.equal(set.checkcritical(), 80);
});
});
