$(document).ready(function(){
  var colors = new Array(
    [227,238,255],
    [178,211,168],
    [244,227,178],
    [124,254,240],
    [255,214,192],
    [248,247,255]);

    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];

    //transition speed
    var gradientSpeed = 0.002;

    function updateGradient()
    {

      if ( $===undefined ) return;

      var c0_0 = colors[colorIndices[0]];
      var c0_1 = colors[colorIndices[1]];
      var c1_0 = colors[colorIndices[2]];
      var c1_1 = colors[colorIndices[3]];

      var istep = 1 - step;
      var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      var color1 = "rgb("+r1+","+g1+","+b1+")";

      var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      var color2 = "rgb("+r2+","+g2+","+b2+")";

      $('.halfCircle').css({
        background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
          background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

          step += gradientSpeed;
          if ( step >= 1 )
          {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

          }
        }

        setInterval(updateGradient,10);



  var colors2 = new Array(
    [240,255,206],
    [255,253,130],
    [39,251,107],
    [0,242,242],
    [236,154,41],
    [254,192,206]);

    var step2 = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices2 = [0,1,2,3];

    //transition speed
    var gradientSpeed2 = 0.002;

    function updateGradient2()
    {

      if ( $===undefined ) return;

      var c0_02 = colors2[colorIndices2[0]];
      var c0_12 = colors2[colorIndices2[1]];
      var c1_02 = colors2[colorIndices2[2]];
      var c1_12 = colors2[colorIndices2[3]];

      var istep2 = 1 - step2;
      var r12 = Math.round(istep2 * c0_02[0] + step2 * c0_12[0]);
      var g12 = Math.round(istep2 * c0_02[1] + step2 * c0_12[1]);
      var b12 = Math.round(istep2 * c0_02[2] + step2 * c0_12[2]);
      var color12 = "rgb("+r12+","+g12+","+b12+")";

      var r22 = Math.round(istep2 * c1_02[0] + step2 * c1_12[0]);
      var g22 = Math.round(istep2 * c1_02[1] + step2 * c1_12[1]);
      var b22 = Math.round(istep2 * c1_02[2] + step2 * c1_12[2]);
      var color22 = "rgb("+r22+","+g22+","+b22+")";

      $('.e').css({
        background: "-webkit-gradient(linear, left top, right top, from("+color12+"), to("+color22+"))"}).css({
          background: "-moz-linear-gradient(left, "+color12+" 0%, "+color22+" 100%)"});

          step2 += gradientSpeed2;
          if ( step2 >= 1 )
          {
            step2 %= 1;
            colorIndices2[0] = colorIndices2[1];
            colorIndices2[2] = colorIndices2[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices2[1] = ( colorIndices2[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices2[3] = ( colorIndices2[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

          }
        }

        setInterval(updateGradient2,10);



    var colors3 = new Array(
      [193,184,200],
      [145,173,194],
      [169,221,214],
      [146,182,177],
      [139,232,203],
      [156,122,151]);

      var step3 = 0;
      //color table indices for:
      // current color left
      // next color left
      // current color right
      // next color right
      var colorIndices3 = [0,1,2,3];

      //transition speed
      var gradientSpeed3 = 0.002;

      function updateGradient3()
      {

        if ( $===undefined ) return;

        var c0_03 = colors3[colorIndices3[0]];
        var c0_13 = colors3[colorIndices3[1]];
        var c1_03 = colors3[colorIndices3[2]];
        var c1_13 = colors3[colorIndices3[3]];

        var istep3 = 1 - step3;
        var r13 = Math.round(istep3 * c0_03[0] + step3 * c0_13[0]);
        var g13 = Math.round(istep3 * c0_03[1] + step3 * c0_13[1]);
        var b13 = Math.round(istep3 * c0_03[2] + step3 * c0_13[2]);
        var color13 = "rgb("+r13+","+g13+","+b13+")";

        var r23 = Math.round(istep3 * c1_03[0] + step3 * c1_13[0]);
        var g23 = Math.round(istep3 * c1_03[1] + step3 * c1_13[1]);
        var b23 = Math.round(istep3 * c1_03[2] + step3 * c1_13[2]);
        var color23 = "rgb("+r23+","+g23+","+b23+")";

        $('.g').css({
          background: "-webkit-gradient(linear, left top, right top, from("+color13+"), to("+color23+"))"}).css({
            background: "-moz-linear-gradient(left, "+color13+" 0%, "+color23+" 100%)"});

            step3 += gradientSpeed3;
            if ( step3 >= 1 )
            {
              step3 %= 1;
              colorIndices3[0] = colorIndices3[1];
              colorIndices3[2] = colorIndices3[3];

              //pick two new target color indices
              //do not pick the same as the current one
              colorIndices3[1] = ( colorIndices3[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
              colorIndices3[3] = ( colorIndices3[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

            }
          }

          setInterval(updateGradient3,10);


  var colors4 = new Array(
    [126,162,170],
    [87,100,144],
    [71,15,244],
    [36,110,185],
    [253,255,252],
    [55,39,114]);

    var step4 = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices4 = [0,1,2,3];

    //transition speed
    var gradientSpeed4 = 0.002;

    function updateGradient4()
    {

      if ( $===undefined ) return;

      var c0_04 = colors4[colorIndices4[0]];
      var c0_14 = colors4[colorIndices4[1]];
      var c1_04 = colors4[colorIndices4[2]];
      var c1_14 = colors4[colorIndices4[3]];

      var istep4 = 1 - step4;
      var r14 = Math.round(istep4 * c0_04[0] + step4 * c0_14[0]);
      var g14 = Math.round(istep4 * c0_04[1] + step4 * c0_14[1]);
      var b14 = Math.round(istep4 * c0_04[2] + step4 * c0_14[2]);
      var color14 = "rgb("+r14+","+g14+","+b14+")";

      var r24 = Math.round(istep4 * c1_04[0] + step4 * c1_14[0]);
      var g24 = Math.round(istep4 * c1_04[1] + step4 * c1_14[1]);
      var b24 = Math.round(istep4 * c1_04[2] + step4 * c1_14[2]);
      var color24 = "rgb("+r24+","+g24+","+b24+")";

      $('.f').css({
        background: "-webkit-gradient(linear, left top, right top, from("+color14+"), to("+color24+"))"}).css({
          background: "-moz-linear-gradient(left, "+color14+" 0%, "+color24+" 100%)"});

          step4 += gradientSpeed4;
          if ( step4 >= 1 )
          {
            step4 %= 1;
            colorIndices4[0] = colorIndices4[1];
            colorIndices4[2] = colorIndices4[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices4[1] = ( colorIndices4[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices4[3] = ( colorIndices4[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

          }
        }

        setInterval(updateGradient4,10);



  var colors5 = new Array(
    [58,36,73],
    [97,112,125],
    [255,0,110],
    [0,1,79],
    [223,248,235],
    [132,143,165]);

    var step5 = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices5 = [0,1,2,3];

    //transition speed
    var gradientSpeed5 = 0.002;

    function updateGradient5()
    {

      if ( $===undefined ) return;

      var c0_05 = colors5[colorIndices5[0]];
      var c0_15 = colors5[colorIndices5[1]];
      var c1_05 = colors5[colorIndices5[2]];
      var c1_15 = colors5[colorIndices5[3]];

      var istep5 = 1 - step5;
      var r15 = Math.round(istep5 * c0_05[0] + step5 * c0_15[0]);
      var g15 = Math.round(istep5 * c0_05[1] + step5 * c0_15[1]);
      var b15 = Math.round(istep5 * c0_05[2] + step5 * c0_15[2]);
      var color15 = "rgb("+r15+","+g15+","+b15+")";

      var r25 = Math.round(istep5 * c1_05[0] + step5 * c1_15[0]);
      var g25 = Math.round(istep5 * c1_05[1] + step5 * c1_15[1]);
      var b25 = Math.round(istep5 * c1_05[2] + step5 * c1_15[2]);
      var color25 = "rgb("+r25+","+g25+","+b25+")";

      $('.d').css({
        background: "-webkit-gradient(linear, left top, right top, from("+color15+"), to("+color25+"))"}).css({
          background: "-moz-linear-gradient(left, "+color15+" 0%, "+color25+" 100%)"});

          step5 += gradientSpeed5;
          if ( step5 >= 1 )
          {
            step5 %= 1;
            colorIndices5[0] = colorIndices5[1];
            colorIndices5[2] = colorIndices5[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices5[1] = ( colorIndices5[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices5[3] = ( colorIndices5[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

          }
        }

        setInterval(updateGradient5,10);
});
