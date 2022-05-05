window.addEventListener("load", () => {
    clock();
    function clock() {
        const today = new Date();

        const londontime = today.toLocaleString('en-GB',{
            timeZone: 'Europe/London',
            timeStyle: 'medium'
        });

        const londondate = today.toLocaleString('en-GB',{
            timeZone: 'Europe/London',
            dateStyle: 'medium'
        });

        const vilniustime = today.toLocaleString('en-GB',{
            timeZone: 'Europe/Vilnius',
            timeStyle: 'medium'
        });

        const vilniusdate = today.toLocaleString('en-GB',{
            timeZone: 'Europe/Vilnius',
            dateStyle: 'long'
        });

        const sgtime = today.toLocaleString('en-GB',{
            timeZone: 'Asia/Singapore',
            timeStyle: 'medium'
        });

        const sgdate = today.toLocaleString('en-GB',{
            timeZone: 'Asia/Singapore',
            dateStyle: 'medium'
        });

              const jakartatime = today.toLocaleString('en-GB',{
                  timeZone: 'Asia/Jakarta',
                  timeStyle: 'medium'
              });

              const jakartadate = today.toLocaleString('en-GB',{
                timeZone: 'Asia/Jakarta',
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


    const aussietime = today.toLocaleString('en-GB',{
        timeZone: 'Australia/Canberra',
        timeStyle: 'medium'
    });

    const aussiedate = today.toLocaleString('en-GB',{
        timeZone: 'Australia/Canberra',
        dateStyle: 'medium'
    });


        document.getElementById("londondisplaytime").innerHTML = londontime;
        setTimeout(clock, 1000);
        document.getElementById("londondisplaydate").innerHTML = londondate;
        setTimeout(clock, 1000);

        document.getElementById("vilniusdisplaytime").innerHTML = vilniustime;
        setTimeout(clock, 1000);
        document.getElementById("vilniusdisplaydate").innerHTML = vilniusdate;
        setTimeout(clock, 1000);

        document.getElementById("sgdisplaytime").innerHTML = sgtime;
        setTimeout(clock, 1000);
        document.getElementById("sgdisplaydate").innerHTML = sgdate;
        setTimeout(clock, 1000);

        document.getElementById("jakartadisplaytime").innerHTML = jakartatime;
        setTimeout(clock, 1000);
        document.getElementById("jakartadisplaydate").innerHTML = jakartadate;
        setTimeout(clock, 1000);

        document.getElementById("tokyodisplaytime").innerHTML = tokyotime;
        setTimeout(clock, 1000);
        document.getElementById("tokyodisplaydate").innerHTML = tokyodate;
        setTimeout(clock, 1000);

        document.getElementById("aussiedisplaytime").innerHTML = aussietime;
        setTimeout(clock, 1000);
        document.getElementById("aussiedisplaydate").innerHTML = aussiedate;
        setTimeout(clock, 1000);
    }
  });

