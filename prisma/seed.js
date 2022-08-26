const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice',
            contact:{
                create:{
                    phone:'07123456789',
                    email:"aliceInWonderland@example.com"
                }
            }
        }
    });

    console.log({createdCustomer});

    // Add your code here
   const createMovie = await prisma.movie.create(
   {
    data:{
        title:'Come see me',
        runtimeMins:125,
    }
   });
   console.log({createMovie});

   const createScreen = await prisma.screen.create({
    data:{
        number:1
    }
   });
   console.log({createScreen});
   
   const createScreening = await prisma.screening.create({
    data:{
        startAt:new Date('2022-08-26 10:00:57'),
        movieId:createMovie.id,
        screenId:createScreen.id,
    }
   });

console.log({createScreening});
   const createTicket = await prisma.ticket.create({
    data:{
        customerId:createdCustomer.id,
        screeningId:createScreening.id
    },
    include:{
        screening:true
    }
   })
   console.log({createTicket});
//2022-08-26 14:16:57 +0000




    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
