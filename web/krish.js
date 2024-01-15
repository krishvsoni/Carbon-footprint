function ved(){
        const API_KEY = 'QDPX8WYB8NMRA2J0AHC6XZ2P1D1X';
        const req_body = {
            instance: "t2.micro",
            region: "us_west_2",
            duration: 8,
            duration_unit: "h"
        }
        const callAPI = async () => {
            try {
                const res = await fetch('https://beta3.api.climatiq.io/compute/aws/instance',{
                    "method": "POST",
                    headers: {
                        "Authorization": `Bearer ${API_KEY}`,
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj),
                });

                const data = await res.json();
               console.log(data);
            } catch (error) {
                console.warn(error);
            }
        }
        callAPI(data);
    }