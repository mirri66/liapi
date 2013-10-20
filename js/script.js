  Parse.initialize("Qlhesd7otH1I5FEmJOcBThS44tLk6TQuMK6fFSqz", "dZO2dIFUCWKS9PWYOBRTeoICYLfmKT1xNIVCnXQ4");
    
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
      testObject.save({foo: "bar"}, {
      success: function(object) {
        $(".success").show();
      },
      error: function(model, error) {
        $(".error").show();
      }
    });