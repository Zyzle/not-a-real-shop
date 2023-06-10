import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const trainersID = 'b2f09f0c-6b8c-4ce3-8db9-0d106d3c18ba';

async function main() {
  const trainers = await prisma.product.upsert({
    where: { id: trainersID },
    update: {},
    create: {
      name: 'Blue Trainers',
      price: 99.99,
      description: 'Blue trainers, usually in pairs',
      imageUrl: '',
      Stock: {
        create: {
          quantity: 100,
        },
      },
    },
  });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
