import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const trainersUUID = '90cd82c4-6133-4fb0-937a-9c30ce186e22';
const trainersStockUUID = '8be45154-0029-4307-953f-22caa19bc61b';

async function main() {
  const trainers = await prisma.product.upsert({
    where: { id: trainersUUID },
    update: {},
    create: {
      name: 'Trainers',
      price: 50,
    },
  });

  const trainersStock = await prisma.stock.upsert({
    where: { id: trainersStockUUID },
    update: {},
    create: {
      productId: trainersUUID,
      quantity: 10,
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
