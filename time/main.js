window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();

      const jakartatime = today.toLocaleString('en-GB',{
          timeZone: 'Asia/Jakarta',
          timeStyle: 'medium'
      });

      const jakartadate = today.toLocaleString('en-GB',{
        timeZone: 'Asia/Jakarta',
        dateStyle: 'long'
    });

      const vilniustime = today.toLocaleString('en-GB',{
        timeZone: 'Europe/Vilnius',
        timeStyle: 'medium'
    });

    const vilniusdate = today.toLocaleString('en-GB',{
        timeZone: 'Europe/Vilnius',
        dateStyle: 'long'
    });

    const tokyotime = today.toLocaleString('en-GB',{
        timeZone: 'Asia/Tokyo',
        timeStyle: 'medium'
    });

    const tokyodate = today.toLocaleString('en-GB',{
        timeZone: 'Asia/Tokyo',
        dateStyle: 'medium'
    });
    
    const londontime = today.toLocaleString('en-GB',{
        timeZone: 'Europe/London',
        timeStyle: 'medium'
    });

    const londondate = today.toLocaleString('en-GB',{
        timeZone: 'Europe/London',
        dateStyle: 'medium'
    });

    const aussietime = today.toLocaleString('en-GB',{
        timeZone: 'Australia/Canberra',
        timeStyle: 'medium'
    });

    const aussiedate = today.toLocaleString('en-GB',{
        timeZone: 'Asia/Singapore',
        dateStyle: 'medium'
    });

    const sgtime = today.toLocaleString('en-GB',{
        timeZone: 'Asia/Singapore',
        timeStyle: 'medium'
    });

    const sgdate = today.toLocaleString('en-GB',{
        timeZone: 'Australia/Singapore',
        dateStyle: 'medium'
    });


        document.getElementById("datetime").innerHTML = jakartatime;
        setTimeout(clock, 1000);
        document.getElementById("date").innerHTML = jakartadate;
        setTimeout(clock, 1000);

        document.getElementById("sgtime").innerHTML = sgtime;
        setTimeout(clock, 1000);
        document.getElementById("sgdate").innerHTML = sgdate;
        setTimeout(clock, 1000);

        document.getElementById("datetime2").innerHTML = vilniustime;
        setTimeout(clock, 1000);
        document.getElementById("date2").innerHTML = vilniusdate;
        setTimeout(clock, 1000);

        document.getElementById("datetime3").innerHTML = tokyotime;
        setTimeout(clock, 1000);
        document.getElementById("date3").innerHTML = tokyodate;
        setTimeout(clock, 1000);

        document.getElementById("datetime4").innerHTML = londontime;
        setTimeout(clock, 1000);
        document.getElementById("date4").innerHTML = londondate;
        setTimeout(clock, 1000);

        document.getElementById("datetime5").innerHTML = aussietime;
        setTimeout(clock, 1000);
        document.getElementById("date5").innerHTML = aussiedate;
        setTimeout(clock, 1000);
    }
  });