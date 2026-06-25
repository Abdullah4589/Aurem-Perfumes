require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME || 'aureum';
const collectionName = 'products';

if (!mongoUri) {
  console.error('Missing MONGODB_URI in environment. Copy .env.example to .env and provide a valid MongoDB connection string.');
  process.exit(1);
}

const sampleProducts = [
  {
    id: 'aureum',
    name: 'AUREUM',
    tagline: 'Liquid gold, bottled darkness.',
    category: 'warm',
    categoryLabel: 'Warm Amber',
    price: 220,
    image: 'images/perfume_aureum.png',
    description: 'An opulent blend of warm amber, heavy honey resins, and smoldering agarwood layered with real gold leaf.',
    notes: {
      top: {
        title: 'Saffron & Smoked Honey',
        description: 'Vibrant saffron paired with dark caramel honey for a rich golden opening.',
        ingredients: ['Persian Saffron', 'Wild Smoked Honey', 'Clove Bud']
      },
      heart: {
        title: 'Damask Rose & Jasmine',
        description: 'A velvet floral heart anchors the scent with ancient rose and jasmine.',
        ingredients: ['Damask Rose', 'Royal Night Jasmine', 'Coriander Seed']
      },
      base: {
        title: 'Wild Oud & Ambergris',
        description: 'Deep oud and ambergris provide a long-lasting resinous finish.',
        ingredients: ['Wild Oud', 'Natural Ambergris', 'Mysore Sandalwood']
      }
    }
  },
  {
    id: 'eclipse',
    name: 'ÉCLIPSE',
    tagline: 'Where shadow meets gold.',
    category: 'woody',
    categoryLabel: 'Smoky Wood',
    price: 245,
    image: 'images/perfume_eclipse.png',
    description: 'A mineral-dark fragrance lifting smoked birch tar, frankincense, and burnt saffron.',
    notes: {
      top: {
        title: 'Burnt Saffron & Slate',
        description: 'Charred saffron and mineral slate create a metallic first impression.',
        ingredients: ['Charred Saffron', 'Mineral Slate Accord', 'Bergamot Peel']
      },
      heart: {
        title: 'Frankincense & Vetiver',
        description: 'Resinous frankincense blends with smoky vetiver for earthy depth.',
        ingredients: ['Frankincense Tears', 'Black Vetiver', 'Patchouli']
      },
      base: {
        title: 'Birch Tar & Ambergris',
        description: 'A dark, smoky finish built from birch tar, musk, and ambergris.',
        ingredients: ['Birch Tar', 'Cashmere Musk', 'Ambergris']
      }
    }
  },
  {
    id: 'nocturne',
    name: 'NOCTURNE',
    tagline: 'Fragrance of the shadow, essence of gold.',
    category: 'spicy',
    categoryLabel: 'Dark Floral',
    price: 260,
    image: 'images/perfume_nocturne.png',
    description: 'A midnight floral warmed by black pepper, iris, and patchouli.',
    notes: {
      top: {
        title: 'Black Pepper & Cardamom',
        description: 'A sharp spicy opening contrasts the deep florals that follow.',
        ingredients: ['Black Peppercorn', 'Green Cardamom', 'Pink Pepper']
      },
      heart: {
        title: 'Velvet Rose & Iris',
        description: 'Dark rose and powdery iris create a sensual heart.',
        ingredients: ['Velvet Rose', 'Florentine Iris', 'Night Orchid']
      },
      base: {
        title: 'Patchouli & Ambergris',
        description: 'A long dark drydown of patchouli, ambergris, and warm woods.',
        ingredients: ['Indonesian Patchouli', 'Atlas Cedarwood', 'Black Ambergris']
      }
    }
  },
  {
    id: 'amber_grove',
    name: 'AMBER GROVE',
    tagline: 'Golden resin under midnight sky.',
    category: 'warm',
    categoryLabel: 'Warm Amber',
    price: 230,
    image: 'images/perfume_aureum.png',
    description: 'A radiant amber oil warmed by incense and vanilla for a soft luminous trail.',
    notes: {
      top: {
        title: 'Amber Resin & Orange Blossom',
        description: 'A warm amber opening brightened by citrus floral accents.',
        ingredients: ['Amber Resin', 'Orange Blossom', 'Orchid Accord']
      },
      heart: {
        title: 'Guaiac Wood & Vanilla',
        description: 'Creamy vanilla and smoky woods create a gentle, elegant core.',
        ingredients: ['Guaiac Wood', 'Madagascar Vanilla', 'Labdanum']
      },
      base: {
        title: 'Incense Musk',
        description: 'A soft drydown of incense smoke and amber musk.',
        ingredients: ['White Musk', 'Labdanum Resin', 'Sandalwood']
      }
    }
  },
  {
    id: 'lune_reverie',
    name: 'LUNE RÊVERIE',
    tagline: 'Moonlit florals with mineral depth.',
    category: 'limited',
    categoryLabel: 'Limited Edition',
    price: 275,
    image: 'images/perfume_eclipse.png',
    description: 'A limited edition of jasmine, iris, and cristalized mineral slate.',
    notes: {
      top: {
        title: 'Night Jasmine & Mint',
        description: 'Cool jasmine dew lifts the scent with subtle freshness.',
        ingredients: ['Night Jasmine', 'Mint', 'Ylang-Ylang']
      },
      heart: {
        title: 'Iris Butter & Frost',
        description: 'Powdery iris blends with frosted floral petals.',
        ingredients: ['Iris Butter', 'White Petals', 'Vetiver Smoke']
      },
      base: {
        title: 'Slate & Cashmere Musk',
        description: 'A crystalline base of mineral slate and soft musk.',
        ingredients: ['Mineral Slate', 'Cashmere Musk', 'Cedar']
      }
    }
  },
  {
    id: 'auric_duo_set',
    name: 'AURIC DUO SET',
    tagline: 'A matched pair of gold & shadow.',
    category: 'set',
    categoryLabel: 'Gift Set',
    price: 320,
    image: 'images/perfume_aureum.png',
    description: 'A luxurious pairing of AUREUM and ÉCLIPSE with a handcrafted ritual guide.',
    notes: {
      top: {
        title: 'Dual Fusion',
        description: 'Warm amber and smoked mineral notes open in harmony.',
        ingredients: ['Saffron', 'Amber', 'Frankincense']
      },
      heart: {
        title: 'Layered Complexity',
        description: 'A rich heart of oud, jasmine, and vetiver for depth.',
        ingredients: ['Oud', 'Jasmine', 'Vetiver']
      },
      base: {
        title: 'Gold & Leather',
        description: 'A polished finish with leather, amber, and metallic warmth.',
        ingredients: ['Leather Accord', 'Gold Leaf', 'Dry Amber']
      }
    }
  },
  {
    id: 'obsidian_shade',
    name: 'OBSIDIAN SHADE',
    tagline: 'A ritual offering of smoke and midnight bloom.',
    category: 'set',
    categoryLabel: 'Gift Set',
    price: 310,
    image: 'images/perfume_nocturne.png',
    description: 'A limited ritual set including NOCTURNE and a signature scented candle.',
    notes: {
      top: {
        title: 'Rose & Smoke',
        description: 'A seductive opening of rose and incense smoke.',
        ingredients: ['Rose', 'Incense', 'Black Pepper']
      },
      heart: {
        title: 'Velvet Ceremony',
        description: 'A deep heart of petals and resinous woods.',
        ingredients: ['Patchouli', 'Rose', 'Cedar']
      },
      base: {
        title: 'Wax & Leather',
        description: 'A sensual base of warm wax and leather undercurrents.',
        ingredients: ['Leather Accord', 'Smoked Wax', 'Amber']
      }
    }
  }
];

async function createOrUpdateProductsCollection(db) {
  const products = db.collection(collectionName);
  await products.createIndex({ id: 1 }, { unique: true });

  const bulkOps = sampleProducts.map((product) => ({
    updateOne: {
      filter: { id: product.id },
      update: { $set: product },
      upsert: true
    }
  }));

  await products.bulkWrite(bulkOps);
  return products;
}

async function start() {
  const client = new MongoClient(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await client.connect();
  const db = client.db(dbName);
  const productsCollection = await createOrUpdateProductsCollection(db);

  app.use(cors());
  app.use(express.json());

  app.get('/api/health', async (req, res) => {
    res.json({ status: 'ok', database: db.databaseName });
  });

  app.get('/api/products', async (req, res) => {
    const query = {};
    if (req.query.category) {
      query.category = req.query.category;
    }

    const products = await productsCollection.find(query).toArray();
    res.json(products);
  });

  app.get('/api/products/:id', async (req, res) => {
    const product = await productsCollection.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  });

  app.use(express.static(path.join(__dirname)));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(port, () => {
    console.log(`AUREUM backend running at http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
