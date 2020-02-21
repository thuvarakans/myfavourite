SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/128334697',function(sound){
    $('#start-e1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/24556266',function(sound){
    $('#start-e2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/172798789',function(sound){
    $('#start-e3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/36467694',function(sound){
      $('#start-e4').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-e4').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
    SC.stream('/tracks/282382733',function(sound){
        $('#start-m1').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-m1').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/tracks/220363576',function(sound){
          $('#start-m2').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#stop-m2').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
        SC.stream('/tracks/36794200',function(sound){
            $('#start-m3').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-m3').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/tracks/84093196',function(sound){
              $('#start-m4').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-m4').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
            SC.stream('/tracks/308219599',function(sound){
                $('#start-t1').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-t1').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });
              SC.stream('/tracks/154754600',function(sound){
                  $('#start-t2').click(function(e) {
                         e.preventDefault();
                         sound.start();
                       });
                  $('#stop-t2').click(function(e) {
                         e.preventDefault();
                         sound.stop();
                      });
                });
                SC.stream('/tracks/132382458',function(sound){
                    $('#start-t3').click(function(e) {
                           e.preventDefault();
                           sound.start();
                         });
                    $('#stop-t3').click(function(e) {
                           e.preventDefault();
                           sound.stop();
                        });
                  });
                  SC.stream('/tracks/65985163',function(sound){
                      $('#start-t4').click(function(e) {
                             e.preventDefault();
                             sound.start();
                           });
                      $('#stop-t4').click(function(e) {
                             e.preventDefault();
                             sound.stop();
                          });
                    });
                    SC.stream('/tracks/236213538',function(sound){
                        $('#start-i1').click(function(e) {
                               e.preventDefault();
                               sound.start();
                             });
                        $('#stop-i1').click(function(e) {
                               e.preventDefault();
                               sound.stop();
                            });
                      });
                      SC.stream('/tracks/314540673',function(sound){
                          $('#start-i2').click(function(e) {
                                 e.preventDefault();
                                 sound.start();
                               });
                          $('#stop-i2').click(function(e) {
                                 e.preventDefault();
                                 sound.stop();
                              });
                        });
                        SC.stream('/tracks/285709295',function(sound){
                            $('#start-i3').click(function(e) {
                                   e.preventDefault();
                                   sound.start();
                                 });
                            $('#stop-i3').click(function(e) {
                                   e.preventDefault();
                                   sound.stop();
                                });
                          });
                          SC.stream('/tracks/605993091',function(sound){
                              $('#start-i4').click(function(e) {
                                     e.preventDefault();
                                     sound.start();
                                   });
                              $('#stop-i4').click(function(e) {
                                     e.preventDefault();
                                     sound.stop();
                                  });
                            });

});
