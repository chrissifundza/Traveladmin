import jsPDFInvoiceTemplate,{ OutputType, jsPDF } from "jspdf-invoice-template";
export function generatePdf(data){
  
 
  
    var props = {
      outputType: OutputType.Save,
      returnJsPDFDocObject: true,
      fileName: "All Users Report",
      orientationLandscape: false,
      compress: true,
      logo: {
          src: "https://st.depositphotos.com/1115174/2689/v/950/depositphotos_26898561-stock-illustration-travel-background.jpg",
          type: 'JPG', //optional, when src= data:uri (nodejs case)
          width: 53.33, //aspect ratio = width/height
          height: 26.66,
          margin: {
              top: 0, //negative or positive num, from the current position
              left: 0 //negative or positive num, from the current position
          }
      },
      stamp: {
          inAllPages: true, //by default = false, just in the last page
          src: "https://st.depositphotos.com/1115174/2689/v/950/depositphotos_26898561-stock-illustration-travel-background.jpg",
          type: 'JPG', //optional, when src= data:uri (nodejs case)
          width: 20, //aspect ratio = width/height
          height: 20,
          margin: {
              top: 0, //negative or positive num, from the current position
              left: 0 //negative or positive num, from the current position
          }
      },
      business: {
          name: "Travel Advisor",
          address: "Johannesburg, Braimfontein,  2001",
          phone: "(+27) 011 11 11 111",
          email: "traveladvisor@gmail.com",
          email_1: "info@traveladvisor.co.za",
          website: "www.traveladvisor.com",
      },
      contact: {
          label: "Report issued for:",
          name: "Travel Advisor Admin",
         
      },
      invoice: {
          label: "Report #: ",
          num: 194582,
          invDate: "Report Date: " +new Date(),
         
          headerBorder: false,
          tableBodyBorder: false,
          header: [
            {
              title: "#", 
              style: { 
                width: 10 
              } 
            }, 
            { 
              title: "Username",
              style: {
                width: 80
              } 
            }, 
            { 
              title: "Email",
              style: {
                width: 80
              } 
            }, 
           
          ],
          table:  data.map((item,index)=>([
            index + 1,
            item.name,
            item.email,
           
        ])),
         
          additionalRows: [{
              col1: 'Total User Report:',
              col2: String(data.length),
              col3: 'ALL',
              style: {
                  fontSize: 14 //optional, default 12
              }
          },
          ],
          invDescLabel: "Report Note",
          invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      footer: {
          text: "The report is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page ",
  };
  jsPDFInvoiceTemplate(props); 
  }

  export function generatePdf2(data){
    var props = {
      outputType: OutputType.Save,
      returnJsPDFDocObject: true,
      fileName: "All Restuarent Report",
      orientationLandscape: false,
      compress: true,
      logo: {
          src: "https://st.depositphotos.com/1115174/2689/v/950/depositphotos_26898561-stock-illustration-travel-background.jpg",
          type: 'JPG', //optional, when src= data:uri (nodejs case)
          width: 53.33, //aspect ratio = width/height
          height: 26.66,
          margin: {
              top: 0, //negative or positive num, from the current position
              left: 0 //negative or positive num, from the current position
          }
      },
      stamp: {
          inAllPages: true, //by default = false, just in the last page
          src: "https://st.depositphotos.com/1115174/2689/v/950/depositphotos_26898561-stock-illustration-travel-background.jpg",
          type: 'JPG', //optional, when src= data:uri (nodejs case)
          width: 20, //aspect ratio = width/height
          height: 20,
          margin: {
              top: 0, //negative or positive num, from the current position
              left: 0 //negative or positive num, from the current position
          }
      },
      business: {
          name: "Travel Advisor",
          address: "Johannesburg, Braimfontein,  2001",
          phone: "(+27) 011 11 11 111",
          email: "traveladvisor@gmail.com",
          email_1: "info@traveladvisor.co.za",
          website: "www.traveladvisor.com",
      },
      contact: {
          label: "Report issued for:",
          name: "Travel Advisor Admin",
         
      },
      invoice: {
          label: "Report #: ",
          num: 194582,
          invDate: "Report Date: " +new Date(),
         
          headerBorder: false,
          tableBodyBorder: false,
          header: [
            {
              title: "#", 
              style: { 
                width: 10 
              } 
            }, 
            { 
              title: "Place Name",
              style: {
                width: 50
              } 
            }, 
            { 
              title: "Address",
              style: {
                width: 50
              } 
            }, 
            { 
              title: "Cellphone",
              style: {
                width: 40
              } 
            }, 
            { 
              title: "Ratings",
              style: {
                width: 10
              } 
            }, 
           
          ],
          table:  data.map((item,index)=>([
            index + 1,
            item.name,
            item.address,
            item.cellphone,
            item.ratings,
           
        ])),
         
          additionalRows: [{
              col1: 'Total Restuarent Report:',
              col2: String(data.length),
              col3: 'ALL',
              style: {
                  fontSize: 14 //optional, default 12
              }
          },
          ],
          invDescLabel: "Report Note",
          invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      footer: {
          text: "The report is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page ",
  };
  jsPDFInvoiceTemplate(props); 
  }
 
  export function generatePdf3(data){
    var props = {
      outputType: OutputType.Save,
      returnJsPDFDocObject: true,
      fileName: "All Visited Hotels Report",
      orientationLandscape: false,
      compress: true,
      logo: {
          src: "https://st.depositphotos.com/1115174/2689/v/950/depositphotos_26898561-stock-illustration-travel-background.jpg",
          type: 'JPG', //optional, when src= data:uri (nodejs case)
          width: 53.33, //aspect ratio = width/height
          height: 26.66,
          margin: {
              top: 0, //negative or positive num, from the current position
              left: 0 //negative or positive num, from the current position
          }
      },
      stamp: {
          inAllPages: true, //by default = false, just in the last page
          src: "https://st.depositphotos.com/1115174/2689/v/950/depositphotos_26898561-stock-illustration-travel-background.jpg",
          type: 'JPG', //optional, when src= data:uri (nodejs case)
          width: 20, //aspect ratio = width/height
          height: 20,
          margin: {
              top: 0, //negative or positive num, from the current position
              left: 0 //negative or positive num, from the current position
          }
      },
      business: {
          name: "Travel Advisor",
          address: "Johannesburg, Braimfontein,  2001",
          phone: "(+27) 011 11 11 111",
          email: "traveladvisor@gmail.com",
          email_1: "info@traveladvisor.co.za",
          website: "www.traveladvisor.com",
      },
      contact: {
          label: "Report issued for:",
          name: "Travel Advisor Admin",
         
      },
      invoice: {
          label: "Report #: ",
          num: 194582,
          invDate: "Report Date: " +new Date(),
         
          headerBorder: false,
          tableBodyBorder: false,
          header: [
            {
              title: "#", 
              style: { 
                width: 10 
              } 
            }, 
            { 
              title: "Place Name",
              style: {
                width: 50
              } 
            }, 
            { 
              title: "ID Hotel",
              style: {
                width: 50
              } 
            }, 
            { 
              title: "Image Source",
              style: {
                width: 40
              } 
            }, 
            { 
              title: "Ratings",
              style: {
                width: 10
              } 
            }, 
           
          ],
          table:  data.map((item,index)=>([
            index + 1,
            item.name,
            item?.idhotel,
            item?.image,
            item.ratings,
           
        ])),
         
          additionalRows: [{
              col1: 'Total Visted Hotel Report:',
              col2: String(data.length),
              col3: 'ALL',
              style: {
                  fontSize: 14 //optional, default 12
              }
          },
          ],
          invDescLabel: "Report Note",
          invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      footer: {
          text: "The report is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page ",
  };
  jsPDFInvoiceTemplate(props); 
  }
 
  export function generatePdf4(data){
    var props = {
      outputType: OutputType.Save,
      returnJsPDFDocObject: true,
      fileName: "All Visited Attraction Report",
      orientationLandscape: false,
      compress: true,
      logo: {
          src: "https://st.depositphotos.com/1115174/2689/v/950/depositphotos_26898561-stock-illustration-travel-background.jpg",
          type: 'JPG', //optional, when src= data:uri (nodejs case)
          width: 53.33, //aspect ratio = width/height
          height: 26.66,
          margin: {
              top: 0, //negative or positive num, from the current position
              left: 0 //negative or positive num, from the current position
          }
      },
      stamp: {
          inAllPages: true, //by default = false, just in the last page
          src: "https://st.depositphotos.com/1115174/2689/v/950/depositphotos_26898561-stock-illustration-travel-background.jpg",
          type: 'JPG', //optional, when src= data:uri (nodejs case)
          width: 20, //aspect ratio = width/height
          height: 20,
          margin: {
              top: 0, //negative or positive num, from the current position
              left: 0 //negative or positive num, from the current position
          }
      },
      business: {
          name: "Travel Advisor",
          address: "Johannesburg, Braimfontein,  2001",
          phone: "(+27) 011 11 11 111",
          email: "traveladvisor@gmail.com",
          email_1: "info@traveladvisor.co.za",
          website: "www.traveladvisor.com",
      },
      contact: {
          label: "Report issued for:",
          name: "Travel Advisor Admin",
         
      },
      invoice: {
          label: "Report #: ",
          num: 194582,
          invDate: "Report Date: " +new Date(),
         
          headerBorder: false,
          tableBodyBorder: false,
          header: [
            {
              title: "#", 
              style: { 
                width: 10 
              } 
            }, 
            { 
              title: "Place Name",
              style: {
                width: 50
              } 
            }, 
            { 
              title: "Address",
              style: {
                width: 50
              } 
            }, 
            { 
              title: "Cellphone",
              style: {
                width: 40
              } 
            }, 
            { 
              title: "Ratings",
              style: {
                width: 10
              } 
            }, 
           
          ],
          table:  data.map((item,index)=>([
            index + 1,
            item.name,
            item.address,
            item.cellphone==null?"":item.cellphone,
            item.ratings,
           
        ])),
         
          additionalRows: [{
              col1: 'Total Visted Hotel Report:',
              col2: String(data.length),
              col3: 'ALL',
              style: {
                  fontSize: 14 //optional, default 12
              }
          },
          ],
          invDescLabel: "Report Note",
          invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      footer: {
          text: "The report is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page ",
  };
  jsPDFInvoiceTemplate(props); 
  }