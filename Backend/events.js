// // // // // const fetch = require("node-fetch");
// // // // // // const cheerio = require("cheerio");

const { cos } = require("@tensorflow/tfjs");

// // // // // // async function getOgImage(eventUrl) {
// // // // // //   try {
// // // // // //     const response = await fetch(eventUrl);
// // // // // //     if (!response.ok) throw new Error("Failed to fetch page");
// // // // // //     // console.log(await response.text(),"jj")
// // // // // //     const html = await response.text();

// // // // // //     const $ = cheerio.load(html);

// // // // // //     const ogImage = $('meta[property="og:image"]').attr("content");

// // // // // //     if (ogImage) {
// // // // // //       console.log("High quality event image URL:", ogImage);
// // // // // //       return ogImage;
// // // // // //     } else {
// // // // // //       console.log("No og:image meta tag found on page.");
// // // // // //       return null;
// // // // // //     }
// // // // // //   } catch (error) {
// // // // // //     console.error("Error fetching or parsing event page:", error);
// // // // // //   }
// // // // // // }

// // // // // // // Example usage:
// // // // // // const eventPageUrl = "https://www.eventbrite.com/e/join-biggest-community-investors-founders-free-entry-tickets-1374193703359";

// // // // // // getOgImage(eventPageUrl);


// // // // // const events=

// // // // //     [
// // // // //     {
// // // // //         "title": "Join Biggest Community | Investors Founders | Free Entry",
// // // // //         "date": {
// // // // //             "start_date": "May 28",
// // // // //             "when": "Wed, May 28, 12:30 – 1:30 PM GMT+5:30"
// // // // //         },
// // // // //         "address": [
// // // // //             "Puducherry (Pondicherry), South Boulevard, Colas Nagar",
// // // // //             "Puducherry, India"
// // // // //         ],
// // // // //         "link": "https://www.eventbrite.com/e/join-biggest-community-investors-founders-free-entry-tickets-1374193703359",
// // // // //         "event_location_map": {
// // // // //             "image": "https://www.google.com/maps/vt/data=l1antN0n9cNuHncxZFixNWGD5WsboMnwZewZijQPlFA3_cFi0gi1naxU7CRLfpbvgtE2Fr_3k61FwrydYI3W8yTKpL9IMJL5hNUIeWsjhObAq7hn8QE",
// // // // //             "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a5361871b9df80f:0xfc9e228907c08fe9?sa=X&ved=2ahUKEwjM6vXQusONAxXCsVYBHQKfKeAQ9eIBegQIAxAA&hl=en&gl=us",
// // // // //             "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x3a5361871b9df80f%3A0xfc9e228907c08fe9&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Events+in+Puducherry&type=place"
// // // // //         },
// // // // //         "description": "Are you an Investor or a Founder? Raising funds & want to build connections with others? Yes? This community is for you!",
// // // // //         "ticket_info": [
// // // // //             {
// // // // //                 "source": "Eventbrite.com",
// // // // //                 "link": "https://www.eventbrite.com/e/join-biggest-community-investors-founders-free-entry-tickets-1374193703359",
// // // // //                 "link_type": "tickets"
// // // // //             }
// // // // //         ],
// // // // //         "venue": {
// // // // //             "name": "Puducherry (Pondicherry)",
// // // // //             "rating": 4,
// // // // //             "reviews": 2077,
// // // // //             "link": "https://www.google.com/search?sca_esv=07554fca3e6d53b6&hl=en&gl=us&q=Puducherry+(Pondicherry)&ludocid=18203024715814047721&ibp=gwp%3B0,7"
// // // // //         },
// // // // //         "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3ItTyjdt9xXYLeV95v198APPq0J3LxoIXnCbUxEniRbrY1H8j-_yNUs&s",
// // // // //         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_eE37VVnhsSuH95zf-Za0aohYPaslV6-ZUiFlMq3vNQ&s"
// // // // //     },
// // // // //     {
// // // // //         "title": "Individual House for Sale in Puducherry",
// // // // //         "date": {
// // // // //             "start_date": "May 27",
// // // // //             "when": "May 21 – 30"
// // // // //         },
// // // // //         "address": [
// // // // //             "Individual House, 6, 10th Cross Rd, Rajaji Nagar, Avvai Nagar, Lawspet",
// // // // //             "Puducherry, India"
// // // // //         ],
// // // // //         "link": "https://www.tendersontime.com/india/details/individual-house-sale-puducherry-71f7d62/",
// // // // //         "event_location_map": {
// // // // //             "image": "https://www.google.com/maps/vt/data=GmQ_JW9MpnD8j8SsLJDOJEIXZlQMoKv3gzJwQ0rOwfMBIiIYxsrfeGmhW7O_a86ENBlhybCGn9_oyxHr5TR59z80muwn0Qp2HpXvZE6rPOxdKHDuqUA",
// // // // //             "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a5361000522497d:0x1c7687e355dbfecb?sa=X&ved=2ahUKEwjM6vXQusONAxXCsVYBHQKfKeAQ9eIBegQICxAA&hl=en&gl=us",
// // // // //             "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x3a5361000522497d%3A0x1c7687e355dbfecb&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Events+in+Puducherry&type=place"
// // // // //         },
// // // // //         "description": "Individual House for Sale in PuducherryAuction ID: 129629 Bank Property ID: IDIB6395862936 Branch: VILLIANUR - 285 Officer, Designation: TAMILARASAN.E-Authorised Officer - Scale - IV - CM Property...",
// // // // //         "ticket_info": [
// // // // //             {
// // // // //                 "source": "TendersOnTime",
// // // // //                 "link": "https://www.tendersontime.com/india/details/individual-house-sale-puducherry-71f7d62/",
// // // // //                 "link_type": "more info"
// // // // //             }
// // // // //         ],
// // // // //         "thumbnail": "https://www.google.com/maps/vt/data=GmQ_JW9MpnD8j8SsLJDOJEIXZlQMoKv3gzJwQ0rOwfMBIiIYxsrfeGmhW7O_a86ENBlhybCGn9_oyxHr5TR59z80muwn0Qp2HpXvZE6rPOxdKHDuqUA"
// // // // //     },
// // // // //     {
// // // // //         "title": "Suryan FM Rhythm with Raaja - Puducherry",
// // // // //         "date": {
// // // // //             "start_date": "Jun 14",
// // // // //             "when": "Sat, Jun 14, 12:30 PM"
// // // // //         },
// // // // //         "address": [
// // // // //             "Expo Ground",
// // // // //             ""
// // // // //         ],
// // // // //         "link": "https://allevents.in/pondicherry/concerts",
// // // // //         "event_location_map": {
// // // // //             "image": "https://www.google.com/maps/vt/data=sq8eip6mhBG3FhjV1CW7_S_MN3WtISxJcTC-gon_FdMosFCVkJOHpHfxrokwRYLKsRH8Hp5Tsi7LawLRlo9KCgOzetaN5pgUgxwThwH_mkgMXJb0KKw",
// // // // //             "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a536188f96efbcf:0xbf6a6550fe13c7eb?sa=X&ved=2ahUKEwjM6vXQusONAxXCsVYBHQKfKeAQ9eIBegQIExAA&hl=en&gl=us",
// // // // //             "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x3a536188f96efbcf%3A0xbf6a6550fe13c7eb&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Events+in+Puducherry&type=place"
// // // // //         },
// // // // //         "description": "Funtastic English Summer Camp 2025 🥭 காரைக்கால் அம்மையார் ஆலய 🥭 மாங்கனி திருவிழா MBBS Admission Seminar Puducherry 2025 Radnus Admission Open! SAMAAJ Dance Narrative BY FIRE BY FORCE ...",
// // // // //         "ticket_info": [
// // // // //             {
// // // // //                 "source": "Allevents.in",
// // // // //                 "link": "https://allevents.in/pondicherry/suryan-fm-rhythm-with-raaja-puducherry/3900028142993442",
// // // // //                 "link_type": "tickets"
// // // // //             }
// // // // //         ],
// // // // //         "thumbnail": "https://www.google.com/maps/vt/data=sq8eip6mhBG3FhjV1CW7_S_MN3WtISxJcTC-gon_FdMosFCVkJOHpHfxrokwRYLKsRH8Hp5Tsi7LawLRlo9KCgOzetaN5pgUgxwThwH_mkgMXJb0KKw"
// // // // //     },
// // // // //     {
// // // // //         "title": "Naraka Chaturdashi",
// // // // //         "date": {
// // // // //             "start_date": "Oct 31",
// // // // //             "when": "Fri, Oct 31, 12 AM GMT+5:30"
// // // // //         },
// // // // //         "address": [
// // // // //             "Puducherry (Pondicherry), South Boulevard, Colas Nagar",
// // // // //             "Puducherry, India"
// // // // //         ],
// // // // //         "link": "https://eventseeker.com/puducherry/oct-31-2025/484667010-naraka-chaturdashi?page=3",
// // // // //         "event_location_map": {
// // // // //             "image": "https://www.google.com/maps/vt/data=l1antN0n9cNuHncxZFixNWGD5WsboMnwZewZijQPlFA3_cFi0gi1naxU7CRLfpbvgtE2Fr_3k61FwrydYI3W8yTKpL9IMJL5hNUIeWsjhObAq7hn8QE",
// // // // //             "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a5361871b9df80f:0xfc9e228907c08fe9?sa=X&ved=2ahUKEwjM6vXQusONAxXCsVYBHQKfKeAQ9eIBegQIGxAA&hl=en&gl=us",
// // // // //             "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x3a5361871b9df80f%3A0xfc9e228907c08fe9&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Events+in+Puducherry&type=place"
// // // // //         },
// // // // //         "description": "The Hindu festival Naraka Chaturdashi is part of the five-day-long Diwali festivities. It celebrates the victory of Kali, Krishna and Satyabhama over the demon king Narakasura, and is also known...",
// // // // //         "ticket_info": [
// // // // //             {
// // // // //                 "source": "eventseeker",
// // // // //                 "link": "https://eventseeker.com/puducherry/oct-31-2025/484667010-naraka-chaturdashi?page=3",
// // // // //                 "link_type": "more info"
// // // // //             }
// // // // //         ],
// // // // //         "venue": {
// // // // //             "name": "Puducherry (Pondicherry)",
// // // // //             "rating": 4,
// // // // //             "reviews": 2077,
// // // // //             "link": "https://www.google.com/search?sca_esv=07554fca3e6d53b6&hl=en&gl=us&q=Puducherry+(Pondicherry)&ludocid=18203024715814047721&ibp=gwp%3B0,7"
// // // // //         },
// // // // //         "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmJPnb-W0cz_Hwny3JayvWh9nvX0bTQ6bWMHNlnFuptxJSNBbbPPmbM4&s",
// // // // //         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKqe47al1mEOb_Sl_Qo1QhTjoMmAXCvtP5c2kZyMbS3RcyTzFCFLiitFR8g&s"
// // // // //     },
// // // // //     {
// // // // //         "title": "JAWAHARLAL INSTITUTE OF POSTGRADUATE MEDICAL EDUCATION and RESEARCH",
// // // // //         "date": {
// // // // //             "start_date": "May 27",
// // // // //             "when": "May 5 – 28"
// // // // //         },
// // // // //         "address": [
// // // // //             "XQ2X+4VC Jawaharlal Institute of Postgraduate Medical Education and Research, Jipmer Campus Rd, Jipmer Campus",
// // // // //             "Puducherry, India"
// // // // //         ],
// // // // //         "link": "https://www.pondicherry-tenders.co.in/latest/oxygen-tenders/",
// // // // //         "event_location_map": {
// // // // //             "image": "https://www.google.com/maps/vt/data=MOxZ_JkChDccjZy5yTmVgZm9VhWZ9OPMQhyTkSTbp6MwrknX3LZgEfWI6LcapBmPgvTxklN7f2Ste0JUGpJ5ee5ijf-txsLdgOVabOakjaz9teilyPc",
// // // // //             "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a536116ef186149:0x8b03791390d53c79?sa=X&ved=2ahUKEwjM6vXQusONAxXCsVYBHQKfKeAQ9eIBegQIIxAA&hl=en&gl=us",
// // // // //             "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x3a536116ef186149%3A0x8b03791390d53c79&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Events+in+Puducherry&type=place"
// // // // //         },
// // // // //         "description": "supply of high flow nasal oxygen therapy unit v2",
// // // // //         "ticket_info": [
// // // // //             {
// // // // //                 "source": "Pondicherry Tenders",
// // // // //                 "link": "https://www.pondicherry-tenders.co.in/latest/oxygen-tenders/",
// // // // //                 "link_type": "more info"
// // // // //             }
// // // // //         ],
// // // // //         "venue": {
// // // // //             "name": "Jawaharlal Institute of Postgraduate Medical Education and Research",
// // // // //             "rating": 4.5,
// // // // //             "reviews": 591,
// // // // //             "link": "https://www.google.com/search?sca_esv=07554fca3e6d53b6&hl=en&gl=us&q=Jawaharlal+Institute+of+Postgraduate+Medical+Education+and+Research&ludocid=10016983121143348345&ibp=gwp%3B0,7"
// // // // //         },
// // // // //         "thumbnail": "https://www.google.com/maps/vt/data=MOxZ_JkChDccjZy5yTmVgZm9VhWZ9OPMQhyTkSTbp6MwrknX3LZgEfWI6LcapBmPgvTxklN7f2Ste0JUGpJ5ee5ijf-txsLdgOVabOakjaz9teilyPc"
// // // // //     },
// // // // //     {
// // // // //         "title": "8 days South India pilgrimage tour and yoga retreat's Pondicherry and Tamilnadu",
// // // // //         "date": {
// // // // //             "start_date": "Jun 2",
// // // // //             "when": "Mon, Jun 2, 11 AM – 6 PM GMT+5:30"
// // // // //         },
// // // // //         "address": [
// // // // //             "Thavathiru Yoga | Aerial Yoga Retreat’s | Yoga Retreat Auroville | Yoga Pondicherry, Auroville Rd, Auroville",
// // // // //             "Kuilapalayam, Tamil Nadu, India"
// // // // //         ],
// // // // //         "link": "https://allevents.in/pondicherry/8-days-south-india-pilgrimage-tour-and-yoga-retreats-pondicherry-and-tamilnadu/80003337725313?slot=2025-06-02",
// // // // //         "event_location_map": {
// // // // //             "image": "https://www.google.com/maps/vt/data=ulOEQ-GOsoM5LSdcV-iFgSQN6KCudHN1B7mLuxQd7XyaGuD33cVXFbZNR8YAil4aLqSC2bK8sDRMMVPH5_xdZ0zJxeBL4gIuBA2OW5hIRVur_28zzhY",
// // // // //             "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a536794e873254f:0x7708033ee5f1b149?sa=X&ved=2ahUKEwjM6vXQusONAxXCsVYBHQKfKeAQ9eIBegQIKxAA&hl=en&gl=us",
// // // // //             "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x3a536794e873254f%3A0x7708033ee5f1b149&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Events+in+Puducherry&type=place"
// // // // //         },
// // // // //         "description": "8 days South India pilgrimage tour and yoga retreat's Discover the ultimate bliss and rejuvenation at our exclusive Yoga Retreat in the serene surroundings of Coimbatore. Step away from the chaos...",
// // // // //         "ticket_info": [
// // // // //             {
// // // // //                 "source": "Allevents.in",
// // // // //                 "link": "https://allevents.in/pondicherry/8-days-south-india-pilgrimage-tour-and-yoga-retreats-pondicherry-and-tamilnadu/80003337725313?slot=2025-06-02",
// // // // //                 "link_type": "tickets"
// // // // //             }
// // // // //         ],
// // // // //         "venue": {
// // // // //             "name": "Thavathiru Yoga | Aerial Yoga Retreat’s | Yoga Retreat Auroville | Yoga Pondicherry",
// // // // //             "rating": 4.9,
// // // // //             "reviews": 7,
// // // // //             "link": "https://www.google.com/search?sca_esv=07554fca3e6d53b6&hl=en&gl=us&q=Thavathiru+Yoga+%7C+Aerial+Yoga+Retreat%E2%80%99s+%7C+Yoga+Retreat+Auroville+%7C+Yoga+Pondicherry&ludocid=8577109059007787337&ibp=gwp%3B0,7"
// // // // //         },
// // // // //         "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJrLh-AwMCZawZEtkAea0wt-xuRqf7QQT9bFEQet9LEzjdNUYexCqZIA&s",
// // // // //         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKWssd9Zc_uy7iBFAa6fSqOlXtTrqDn5eUkGqAmG64iAvhoertVXVko2q7Q&s=10"
// // // // //     },
// // // // //     {
// // // // //         "title": "FounderX Global Conference 2025",
// // // // //         "date": {
// // // // //             "start_date": "Jun 21",
// // // // //             "when": "Sat, Jun 21, 8:30 AM – Sun, Jun 22, 11:30 PM GMT+5:30"
// // // // //         },
// // // // //         "address": [
// // // // //             "2R42+QJC Sri Aurobindo Auditorium, Auroville",
// // // // //             "Tamil Nadu, India"
// // // // //         ],
// // // // //         "link": "https://allevents.in/cuddalore/conferences",
// // // // //         "event_location_map": {
// // // // //             "image": "https://www.google.com/maps/vt/data=hDU2CEH2DFQjLacSnqmHoMa4GAIMEUyMZ5gKJLkH5fJAhomJXJIlQ84QXYB5VrsPBznab67y98oE6xW-Hh4ouMtxI5fgePcpLw1Kvfvze1Fa9aFSBz4",
// // // // //             "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a5366ee82dae76b:0xf46e68e8c3e49f32?sa=X&ved=2ahUKEwjM6vXQusONAxXCsVYBHQKfKeAQ9eIBegQIMxAA&hl=en&gl=us",
// // // // //             "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x3a5366ee82dae76b%3A0xf46e68e8c3e49f32&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Events+in+Puducherry&type=place"
// // // // //         },
// // // // //         "description": "Explore upcoming conferences in Cuddalore. Whether its Medical Conference or Business conferences in Cuddalore. Here is list of all type of 2025 conference events happening in Cuddalore.",
// // // // //         "ticket_info": [
// // // // //             {
// // // // //                 "source": "Allevents.in",
// // // // //                 "link": "https://allevents.in/pondicherry/founderx-global-conference-2025/80001953124301",
// // // // //                 "link_type": "tickets"
// // // // //             }
// // // // //         ],
// // // // //         "venue": {
// // // // //             "name": "Sri Aurobindo Auditorium",
// // // // //             "rating": 4.7,
// // // // //             "reviews": 74,
// // // // //             "link": "https://www.google.com/search?sca_esv=07554fca3e6d53b6&hl=en&gl=us&q=Sri+Aurobindo+Auditorium&ludocid=17613130541620830002&ibp=gwp%3B0,7"
// // // // //         },
// // // // //         "thumbnail": "https://www.google.com/maps/vt/data=hDU2CEH2DFQjLacSnqmHoMa4GAIMEUyMZ5gKJLkH5fJAhomJXJIlQ84QXYB5VrsPBznab67y98oE6xW-Hh4ouMtxI5fgePcpLw1Kvfvze1Fa9aFSBz4"
// // // // //     },
// // // // //     {
// // // // //         "title": "Tourniquet Machine, Qty: 1",
// // // // //         "date": {
// // // // //             "start_date": "May 27",
// // // // //             "when": "May 21 – Jun 6"
// // // // //         },
// // // // //         "address": [
// // // // //             "Ezhil Biomedical Sales and Services, No:30, Bharathi Nagar, 8 th cross street, Taluk, Karuvadikuppam",
// // // // //             "Puducherry, India"
// // // // //         ],
// // // // //         "link": "https://www.tendersontime.com/india/details/tourniquet-machine-qty-1-71f3891/",
// // // // //         "event_location_map": {
// // // // //             "image": "https://www.google.com/maps/vt/data=da6KBolkWFtAOl1H5feeItR4yItQl_cix6awMWkTa_88VZ94PGtUW9ccb9XdfZhSBD-bXpTxLuqIhnvrUt4sbqr-WU80_fIsl4b8ImZQWdhdLmRK40o",
// // // // //             "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a53619d6531b7e3:0xb9f02aef5f3d4fb9?sa=X&ved=2ahUKEwjM6vXQusONAxXCsVYBHQKfKeAQ9eIBegQIOxAA&hl=en&gl=us",
// // // // //             "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x3a53619d6531b7e3%3A0xb9f02aef5f3d4fb9&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Events+in+Puducherry&type=place"
// // // // //         },
// // // // //         "description": "Tourniquet Machine (Q3)Quantity Required: 1 Start Date: 21-05-2025 10:15 AM End Date: 06-06-2025 3:00 PM",
// // // // //         "ticket_info": [
// // // // //             {
// // // // //                 "source": "TendersOnTime",
// // // // //                 "link": "https://www.tendersontime.com/india/details/tourniquet-machine-qty-1-71f3891/",
// // // // //                 "link_type": "more info"
// // // // //             }
// // // // //         ],
// // // // //         "venue": {
// // // // //             "name": "Ezhil Biomedical Sales and Services",
// // // // //             "rating": 5,
// // // // //             "reviews": 21,
// // // // //             "link": "https://www.google.com/search?sca_esv=07554fca3e6d53b6&hl=en&gl=us&q=Ezhil+Biomedical+Sales+and+Services&ludocid=13398256099010629561&ibp=gwp%3B0,7"
// // // // //         },
// // // // //         "thumbnail": "https://www.google.com/maps/vt/data=da6KBolkWFtAOl1H5feeItR4yItQl_cix6awMWkTa_88VZ94PGtUW9ccb9XdfZhSBD-bXpTxLuqIhnvrUt4sbqr-WU80_fIsl4b8ImZQWdhdLmRK40o"
// // // // //     },
// // // // //     {
// // // // //         "title": "8 days South India pilgrimage tour and yoga retreat's Pondicherry and Tamilnadu",
// // // // //         "date": {
// // // // //             "start_date": "Jul 7",
// // // // //             "when": "Mon, Jul 7, 11 AM – 6 PM GMT+5:30"
// // // // //         },
// // // // //         "address": [
// // // // //             "Thavathiru Yoga | Aerial Yoga Retreat’s | Yoga Retreat Auroville | Yoga Pondicherry, Auroville Rd, Auroville",
// // // // //             "Kuilapalayam, Tamil Nadu, India"
// // // // //         ],
// // // // //         "link": "https://allevents.in/pondicherry/8-days-south-india-pilgrimage-tour-and-yoga-retreats-pondicherry-and-tamilnadu/80003337725313?slot=2025-07-07",
// // // // //         "event_location_map": {
// // // // //             "image": "https://www.google.com/maps/vt/data=ulOEQ-GOsoM5LSdcV-iFgSQN6KCudHN1B7mLuxQd7XyaGuD33cVXFbZNR8YAil4aLqSC2bK8sDRMMVPH5_xdZ0zJxeBL4gIuBA2OW5hIRVur_28zzhY",
// // // // //             "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a536794e873254f:0x7708033ee5f1b149?sa=X&ved=2ahUKEwjM6vXQusONAxXCsVYBHQKfKeAQ9eIBegQIQxAA&hl=en&gl=us",
// // // // //             "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x3a536794e873254f%3A0x7708033ee5f1b149&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Events+in+Puducherry&type=place"
// // // // //         },
// // // // //         "description": "8 days South India pilgrimage tour and yoga retreat's Discover the ultimate bliss and rejuvenation at our exclusive Yoga Retreat in the serene surroundings of Coimbatore. Step away from the chaos...",
// // // // //         "ticket_info": [
// // // // //             {
// // // // //                 "source": "Allevents.in",
// // // // //                 "link": "https://allevents.in/pondicherry/8-days-south-india-pilgrimage-tour-and-yoga-retreats-pondicherry-and-tamilnadu/80003337725313?slot=2025-07-07",
// // // // //                 "link_type": "tickets"
// // // // //             }
// // // // //         ],
// // // // //         "venue": {
// // // // //             "name": "Thavathiru Yoga | Aerial Yoga Retreat’s | Yoga Retreat Auroville | Yoga Pondicherry",
// // // // //             "rating": 4.9,
// // // // //             "reviews": 7,
// // // // //             "link": "https://www.google.com/search?sca_esv=07554fca3e6d53b6&hl=en&gl=us&q=Thavathiru+Yoga+%7C+Aerial+Yoga+Retreat%E2%80%99s+%7C+Yoga+Retreat+Auroville+%7C+Yoga+Pondicherry&ludocid=8577109059007787337&ibp=gwp%3B0,7"
// // // // //         },
// // // // //         "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJrLh-AwMCZawZEtkAea0wt-xuRqf7QQT9bFEQet9LEzjdNUYexCqZIA&s",
// // // // //         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKWssd9Zc_uy7iBFAa6fSqOlXtTrqDn5eUkGqAmG64iAvhoertVXVko2q7Q&s=10"
// // // // //     },
// // // // //     {
// // // // //         "title": "AGRI TEC EXPO-2025",
// // // // //         "date": {
// // // // //             "start_date": "May 29",
// // // // //             "when": "Thu, May 29, 7 – 10 PM GMT+5:30"
// // // // //         },
// // // // //         "address": [
// // // // //             "Anandha Thirumana Mahal A/C, Chennai Trunk Rd, Kamalanagar",
// // // // //             "Viluppuram, Tamil Nadu, India"
// // // // //         ],
// // // // //         "link": "https://www.eventbrite.com/e/agri-tec-expo-2025-tickets-1287356952299",
// // // // //         "event_location_map": {
// // // // //             "image": "https://www.google.com/maps/vt/data=4qLAFFaejOhEBns4hWL3xWgLGl7XgSPeA8qUqUGWByaEk3-M8CyDsmnsAyLOpQvStZoRXFUkTgEKxLU-hhR_NOgepAuoCbRpmZeY3NqnChgjSN5qBHY",
// // // // //             "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3a5356b80579bf63:0x22da7194d28fd10e?sa=X&ved=2ahUKEwjM6vXQusONAxXCsVYBHQKfKeAQ9eIBegQISxAA&hl=en&gl=us",
// // // // //             "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x3a5356b80579bf63%3A0x22da7194d28fd10e&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=Events+in+Puducherry&type=place"
// // // // //         },
// // // // //         "description": "AGRI TEC EXPO - 2025 the objective of this expo is to bring together under one roof, the manufacturers, traders and distributors",
// // // // //         "ticket_info": [
// // // // //             {
// // // // //                 "source": "Eventbrite.com",
// // // // //                 "link": "https://www.eventbrite.com/e/agri-tec-expo-2025-tickets-1287356952299",
// // // // //                 "link_type": "tickets"
// // // // //             },
// // // // //             {
// // // // //                 "source": "AllEvents",
// // // // //                 "link": "https://allevents.in/viluppuram/all",
// // // // //                 "link_type": "more info"
// // // // //             }
// // // // //         ],
// // // // //         "venue": {
// // // // //             "name": "Anandha Thirumana Mahal A/C",
// // // // //             "rating": 4.2,
// // // // //             "reviews": 655,
// // // // //             "link": "https://www.google.com/search?sca_esv=07554fca3e6d53b6&hl=en&gl=us&q=Anandha+Thirumana+Mahal+A/C&ludocid=2511444626214211854&ibp=gwp%3B0,7"
// // // // //         },
// // // // //         "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nUkIaroRVMX0ue-rMcSrxg4HzDPKtYSm95m-ZfM75w7mCZqlSO3Vr1g&s",
// // // // //         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcdQ0ytoBiGQ1GxYnH84a8MA9a74BVeouE7zGi_BNMRAfLrUlKa61YVwW9w&s=10"
// // // // //     }
// // // // // ]

// // // // // // console.log(events.map((items)=>{
// // // // // //     items
// // // // // // }),'asasd')

// // // // // const titles =events.map((items)=>items.title)
// // // // // const Data =events.map((items)=>items.date)
// // // // //  let Link = events.map((items)=>(items.link))

// // // // // const axios = require('axios');


// // // // // const apiKey = '00702f7c94921f2d1c7a36ffab123943c1594d722e5ae2d21095e00ac3207668';

// // // // // const baseUrl = 'https://serpapi.com/search.json';



// // // // // const Images = [];

// // // // // function sleep(ms) {
// // // // //   return new Promise(resolve => setTimeout(resolve, ms));
// // // // // }

// // // // // async function fetchImages() {
// // // // //   for (const title of titles) {
// // // // //     try {
// // // // //       const response = await axios.get(baseUrl, {
// // // // //         params: {
// // // // //           engine: 'google_images',
// // // // //           q: title,
// // // // //           api_key: apiKey
// // // // //         }
// // // // //       });

// // // // //       const data = response.data;

// // // // //       if (data.images_results && data.images_results.length > 0) {
// // // // //         const imgUrl = data.images_results[0].original;
// // // // //         console.log(`Title: ${title}`);
// // // // //         console.log(`Image: ${imgUrl}`);
// // // // //         Images.push(imgUrl);
// // // // //       } else {
// // // // //         console.log(`No image found for: ${title}`);
// // // // //         Images.push(null);
// // // // //       }

// // // // //       await sleep(3000); // Delay to respect rate limits
// // // // //     } catch (err) {
// // // // //       console.error(`Error for "${title}":`, err.response ? err.response.data : err.message);
// // // // //       Images.push(null);
// // // // //     }
// // // // //   }

// // // // //   console.log("✅ All fetched image URLs:");
// // // // //   console.log(Images);
// // // // // }

// // // // // fetchImages();


// // // const link =[
// // //     "https://www.eventbrite.com/e/join-biggest-community-investors-founders-free-entry-tickets-1374193703359",
// // //     "https://www.tendersontime.com/india/details/individual-house-sale-puducherry-71f7d62/",
// // //     "https://allevents.in/pondicherry/concerts",
// // //     "https://allevents.in/pondicherry/8-days-south-india-pilgrimage-tour-and-yoga-retreats-pondicherry-and-tamilnadu/80003337725313?slot=2025-06-02",
// // //     "https://www.tendersontime.com/india/details/portable-ultrasound-machine-v2-qty-2-7207d71/",
// // //     "https://eventseeker.com/puducherry/oct-31-2025/484667010-naraka-chaturdashi?page=3",
// // //     "https://allevents.in/pondicherry/8-days-south-india-pilgrimage-tour-and-yoga-retreats-pondicherry-and-tamilnadu/80003337725313?slot=2025-06-16",
// // //     "https://www.tendersontime.com/india/details/tourniquet-machine-qty-1-71f3891/",
// // //     "https://allevents.in/cuddalore/conferences",
// // //     "https://allevents.in/pondicherry/8-days-south-india-pilgrimage-tour-and-yoga-retreats-pondicherry-and-tamilnadu/80003337725313?slot=2025-06-23"
// // // ]
// // // const date=[
// // //     {
// // //         "start_date": "May 28",
// // //         "when": "Wed, May 28, 12:30 – 1:30 PM GMT+5:30"
// // //     },
// // //     {
// // //         "start_date": "May 28",
// // //         "when": "May 21 – 30"
// // //     },
// // //     {
// // //         "start_date": "Jun 14",
// // //         "when": "Sat, Jun 14, 12:30 PM"
// // //     },
// // //     {
// // //         "start_date": "Jun 2",
// // //         "when": "Mon, Jun 2, 11 AM – 6 PM GMT+5:30"
// // //     },
// // //     {
// // //         "start_date": "May 28",
// // //         "when": "May 22 – Jun 12"
// // //     },
// // //     {
// // //         "start_date": "Oct 31",
// // //         "when": "Fri, Oct 31, 12 AM GMT+5:30"
// // //     },
// // //     {
// // //         "start_date": "Jun 16",
// // //         "when": "Mon, Jun 16, 11 AM – 6 PM GMT+5:30"
// // //     },
// // //     {
// // //         "start_date": "May 28",
// // //         "when": "May 21 – Jun 6"
// // //     },
// // //     {
// // //         "start_date": "Jun 21",
// // //         "when": "Sat, Jun 21, 8:30 AM – Sun, Jun 22, 11:30 PM GMT+5:30"
// // //     },
// // //     {
// // //         "start_date": "Jun 23",
// // //         "when": "Mon, Jun 23, 11 AM – 6 PM GMT+5:30"
// // //     }
// // // ]

// // // const title=[
// // //     "Join Biggest Community | Investors Founders | Free Entry",
// // //     "Individual House for Sale in Puducherry",
// // //     "Suryan FM Rhythm with Raaja - Puducherry",
// // //     "8 days South India pilgrimage tour and yoga retreat's Pondicherry and Tamilnadu",
// // //     "Portable Ultrasound Machine (V2), Qty: 2",
// // //     "Naraka Chaturdashi",
// // //     "8 days South India pilgrimage tour and yoga retreat's Pondicherry and Tamilnadu",
// // //     "Tourniquet Machine, Qty: 1",
// // //     "FounderX Global Conference 2025",
// // //     "8 days South India pilgrimage tour and yoga retreat's Pondicherry and Tamilnadu"
// // // ]

// // // const Dates = date.map((items)=>(items.when))
// // // const arr=[];
// // // console.log(title.length)
// // // for(let i=0;title.length>i;i++){
// // //     arr.push({
        
// // //        title: title[i],
// // //    link : link[i],
// // // date: Dates[i]})
   

// // // }                                                                                                                                                                               
// // // console.log(arr,"jj")
// // // // const array=[]
// // // // let chunk = 3;

// // // // // Spliced arrays into 4 chunks
// // // // let a1 =    arr.splice(0, chunk); 
// // // // let a2 = arr.splice(0, chunk); 
// // // // let a3 = arr.splice(0, chunk); 
// // // // let a4 = arr.splice(0, chunk);

// // // //  array.push(a1,a2,a3,a4)
// // // //  console.log(array.map((items)=>items[0]),"ASD")
// // // // const ass=
// // // // [
// // // //     {
// // // //         "title": "Join Biggest Community | Investors Founders | Free Entry"
// // // //     },
// // // //     {
// // // //         "link": "https://www.eventbrite.com/e/join-biggest-community-investors-founders-free-entry-tickets-1374193703359"
// // // //     },
// // // //     {
// // // //         "Date": "Wed, May 28, 12:30 – 1:30 PM GMT+5:30"
// // // //     },
// // // //     {
// // // //         "Images": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1009171683%2F2719090527421%2F1%2Foriginal.20250415-100215?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2750%2C1375&s=1c967b70c1f0c593b38fa68c87c39b10"
// // // //     },
// // // //     {
// // // //         "title": "Individual House for Sale in Puducherry"
// // // //     },
// // // //     {
// // // //         "link": "https://www.tendersontime.com/india/details/individual-house-sale-puducherry-71f7d62/"
// // // //     },
// // // //     {
// // // //         "Date": "May 21 – 30"
// // // //     },
// // // //     {
// // // //         "Images": "https://dynamic.realestateindia.com/prop_images/1636177/1235912_1-350x350.jpg"
// // // //     },
// // // //     {
// // // //         "title": "Suryan FM Rhythm with Raaja - Puducherry"
// // // //     },
// // // //     {
// // // //         "link": "https://allevents.in/pondicherry/concerts"
// // // //     },
// // // //     {
// // // //         "Date": "Sat, Jun 14, 12:30 PM"
// // // //     },
// // // //     {
// // // //         "Images": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3639980621100848446"
// // // //     },
// // // //     {
// // // //         "title": "8 days South India pilgrimage tour and yoga retreat's Pondicherry and Tamilnadu"
// // // //     },
// // // //     {
// // // //         "link": "https://allevents.in/pondicherry/8-days-south-india-pilgrimage-tour-and-yoga-retreats-pondicherry-and-tamilnadu/80003337725313?slot=2025-06-02"
// // // //     },
// // // //     {
// // // //         "Date": "Mon, Jun 2, 11 AM – 6 PM GMT+5:30"
// // // //     },
// // // //     {
// // // //         "Images": "https://cdn2.allevents.in/thumbs/thumb672f9941df099.jpg"
// // // //     },
// // // //     {
// // // //         "title": "Portable Ultrasound Machine (V2), Qty: 2"
// // // //     },
// // // //     {
// // // //         "link": "https://www.tendersontime.com/india/details/portable-ultrasound-machine-v2-qty-2-7207d71/"
// // // //     },
// // // //     {
// // // //         "Date": "May 22 – Jun 12"
// // // //     },
// // // //     {
// // // //         "Images": "https://i.ebayimg.com/images/g/ipsAAOSw7ttlfLKs/s-l1200.jpg"
// // // //     },
// // // //     {
// // // //         "title": "Naraka Chaturdashi"
// // // //     },
// // // //     {
// // // //         "link": "https://eventseeker.com/puducherry/oct-31-2025/484667010-naraka-chaturdashi?page=3"
// // // //     },
// // // //     {
// // // //         "Date": "Fri, Oct 31, 12 AM GMT+5:30"
// // // //     },
// // // //     {
// // // //         "Images": "https://iskcondwarka.org/wp-content/uploads/2020/11/NARAKA-CHATURDASHI-1.jpg"
// // // //     },
// // // //     {
// // // //         "title": "8 days South India pilgrimage tour and yoga retreat's Pondicherry and Tamilnadu"
// // // //     },
// // // //     {
// // // //         "link": "https://allevents.in/pondicherry/8-days-south-india-pilgrimage-tour-and-yoga-retreats-pondicherry-and-tamilnadu/80003337725313?slot=2025-06-16"
// // // //     },
// // // //     {
// // // //         "Date": "Mon, Jun 16, 11 AM – 6 PM GMT+5:30"
// // // //     },
// // // //     {
// // // //         "Images": "https://cdn2.allevents.in/thumbs/thumb672f9941df099.jpg"
// // // //     },
// // // //     {
// // // //         "title": "Tourniquet Machine, Qty: 1"
// // // //     },
// // // //     {
// // // //         "link": "https://www.tendersontime.com/india/details/tourniquet-machine-qty-1-71f3891/"
// // // //     },
// // // //     {
// // // //         "Date": "May 21 – Jun 6"
// // // //     },
// // // //     {
// // // //         "Images": "http://swmedical.com/cdn/shop/files/ZimmerATS2200TourniquetSystemSinglePortRefurbished.jpg?v=1740602707"
// // // //     },
// // // //     {
// // // //         "title": "FounderX Global Conference 2025"
// // // //     },
// // // //     {
// // // //         "link": "https://allevents.in/cuddalore/conferences"
// // // //     },
// // // //     {
// // // //         "Date": "Sat, Jun 21, 8:30 AM – Sun, Jun 22, 11:30 PM GMT+5:30"
// // // //     },
// // // //     {
// // // //         "Images": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3620765365808067632"
// // // //     },
// // // //     {
// // // //         "title": "8 days South India pilgrimage tour and yoga retreat's Pondicherry and Tamilnadu"
// // // //     },
// // // //     {
// // // //         "link": "https://allevents.in/pondicherry/8-days-south-india-pilgrimage-tour-and-yoga-retreats-pondicherry-and-tamilnadu/80003337725313?slot=2025-06-23"
// // // //     },
// // // //     {
// // // //         "Date": "Mon, Jun 23, 11 AM – 6 PM GMT+5:30"
// // // //     },
// // // //     {
// // // //         "Images": "https://cdn2.allevents.in/thumbs/thumb672f9941df099.jpg"
// // // //     }
// // // // ]

// // // // console.log(Object.values(ass))


// // function shuffle(array){
// //   let i = array.length, j, temp;
// //   while (--i > 0) {
// //   j = Math.floor(Math.random () * (i+1));
// //   temp = array[j];
// //   array[j] = array[i];
// //   array[i] = temp;
// //   }
// // }

// // shuffle(arr)

// // 

// const axios = require('axios');

// const getUserLocation = async () => {
//   const res = await axios.get('http://ip-api.com/json/');
//   const { lat, lon } = res.data;
//   console.log(res.data)
//   return { latitude: lat, longitude: lon };
// };

// getUserLocation()

let date =[];
        for(let i=0;i<=3;i++){
          console.log(i,"asdf")
          date.push( new Date().getFullYear() - i)
            console.log(date)
        }

        return date
