/* INTERACTIVE LOGIC & ANIMATION CONTROLLER FOR AUREUM */

// ==========================================================================
// 1. DATA SOURCE & PRODUCT MODELS
// ==========================================================================
const PRODUCTS = {
  aureum: {
    id: 'aureum',
    name: 'AUREUM',
    tagline: 'Liquid gold, bottled darkness.',
    category: 'warm',
    categoryLabel: 'Warm Amber',
    price: 220,
    image: 'images/perfume_aureum.png',
    description: 'An opulent blend of warm amber, heavy honey resins, and smoldering agarwood. suspension of golden almond oils and genuine flakes of 24k gold leaf creates a floating sensory contrast. Deep, majestic, and unforgettable.',
    notes: {
      top: {
        title: 'Saffron & Smoked Honey',
        description: 'Vibrant Persian saffron paired with heavy, dark caramelized comb honey provides a sweet, aromatic initial opening.',
        ingredients: ['Persian Saffron', 'Wild Smoked Honey', 'Clove Bud']
      },
      heart: {
        title: 'Turkish Damask Rose & Royal Jasmine',
        description: 'A velvet, deeply sensual floral core of ancient roses and nocturnal blooming jasmine that balances the heavy resins.',
        ingredients: ['Damask Rose', 'Royal Night Jasmine', 'Coriander Seed']
      },
      base: {
        title: 'Wild Oud, Ambergris & Sandalwood',
        description: 'The foundation of absolute darkness. Aged wild agarwood (oud) combined with salty marine ambergris and raw creamy Indian sandalwood.',
        ingredients: ['Wild Agarwood (Oud)', 'Natural Ambergris', 'Mysore Sandalwood', '24k Gold Flakes']
      }
    }
  },
  solis: {
    id: 'solis',
    name: 'SOLIS',
    tagline: 'Sun-drenched amber, liquid light.',
    category: 'warm',
    categoryLabel: 'Warm Amber',
    price: 215,
    image: 'images/perfume_aureum.png',
    description: 'A radiant solar amber infused with salted mandarin zest, dry coconut husk, and pure suspended gold leaf. Bright, warm, and deeply sensual.',
    notes: {
      top: {
        title: 'Salted Mandarin & Ginger',
        description: 'Bright citrus mandarin infused with sea salt crystals and fresh spicy ginger root.',
        ingredients: ['Salted Mandarin', 'Zesty Ginger', 'Lime Zest']
      },
      heart: {
        title: 'Coconut Husk & Orange Blossom',
        description: 'A dry, sun-warmed tropical core of toasted coconut fibers and rich, sweet neroli flowers.',
        ingredients: ['Coconut Husk Accord', 'Orange Blossom Absolute', 'Ylang-Ylang']
      },
      base: {
        title: 'Warm Amber & Solar Musk',
        description: 'A golden, lingering finish of dry tree amber resins and warm, skin-like musk, carrying gold flakes.',
        ingredients: ['Golden Amber Resins', 'Solar Musk', '24k Gold Flakes']
      }
    }
  },
  eclipse: {
    id: 'eclipse',
    name: 'ÉCLIPSE',
    tagline: 'Where shadow meets gold.',
    category: 'woody',
    categoryLabel: 'Smoky Wood',
    price: 245,
    image: 'images/perfume_eclipse.png',
    description: 'A mineral-heavy dry formulation capturing the celestial mystery of a solar eclipse. Smoked birch tar, mineral slate, and dry frankincense create a cold shadow, set ablaze by burnt saffron and glowing warm ambergris.',
    notes: {
      top: {
        title: 'Burnt Saffron & Mineral Slate',
        description: 'Cold, metallic flint accords and charred saffron stems evoke the scent of volcanic ash under starlight.',
        ingredients: ['Charred Saffron', 'Mineral Slate Accord', 'Bergamot Peel']
      },
      heart: {
        title: 'Frankincense Tears & Black Vetiver',
        description: 'Somatic resinous frankincense and earthy, smoke-cured vetiver roots that anchor the mid-notes in woody mystery.',
        ingredients: ['Olibanum Tears', 'Java Black Vetiver', 'Dried Patchouli Leaves']
      },
      base: {
        title: 'Birch Tar, Musk & Liquid Ambergris',
        description: 'A dark, smoky finish mimicking smoldering coals. Pyrogenic birch wood tar, heavy cashmere musk, and warm liquid ambergris.',
        ingredients: ['Pyrogenic Birch Tar', 'Cashmere Musk', 'Fossilized Amber', 'Black Volcanic Mineral Extract']
      }
    }
  },
  oud_noir: {
    id: 'oud_noir',
    name: 'OUD NOIR',
    tagline: 'The shadow of ancient woods.',
    category: 'woody',
    categoryLabel: 'Smoky Wood',
    price: 250,
    image: 'images/perfume_eclipse.png',
    description: 'A dry, highly concentrated leather wood blend. Smoked agarwood (oud) is combined with charred birch and heavy black leather cords. Dark, primeval, and deep.',
    notes: {
      top: {
        title: 'Black Pepper & Juniper Berries',
        description: 'A sharp, bracing opening of Malabar pepper and cold, woody juniper berries.',
        ingredients: ['Malabar Pepper', 'Juniper Berries', 'Cypress Leaf']
      },
      heart: {
        title: 'Smoked Leather & Cedar Bark',
        description: 'A rugged middle layer of cured black leather and dry cedarwood chips.',
        ingredients: ['Smoked Leather Accord', 'Atlas Cedar Bark', 'Tobacco Absolute']
      },
      base: {
        title: 'Charred Agarwood (Oud) & Vetiver',
        description: 'An intense, dry forest floor finish of volcanic oud wood and dark vetiver roots.',
        ingredients: ['Charred Oud wood', 'Java Vetiver', 'Black Frankincense']
      }
    }
  },
  santal_dore: {
    id: 'santal_dore',
    name: 'SANTAL DORÉ',
    tagline: 'Sandalwood in liquid gold.',
    category: 'woody',
    categoryLabel: 'Smoky Wood',
    price: 225,
    image: 'images/perfume_aureum.png',
    description: 'Bespoke Indian sandalwood infused with warm cardamom pods, dry cedar, and golden resin oils. Carrying suspended gold leaf. Woody, classic, and extremely elegant.',
    notes: {
      top: {
        title: 'Green Cardamom & Bergamot',
        description: 'A clean, spicy, citrus start of hand-crushed green cardamom and Sicilian bergamot oil.',
        ingredients: ['Green Cardamom', 'Sicilian Bergamot', 'Grapefruit Peel']
      },
      heart: {
        title: 'Cedarwood & Creamy Milk Accord',
        description: 'A smooth, comforting mid-section of dry Atlas cedar and a creamy warm milk note.',
        ingredients: ['Atlas Cedarwood', 'Creamy Milk Accord', 'Papyrus wood']
      },
      base: {
        title: 'Bespoke Sandalwood & Amber',
        description: 'The rich signature finish of authentic Indian sandalwood oil, fossilized amber, and gold leaf.',
        ingredients: ['Indian Sandalwood', 'Fossilized Amber', '24k Gold Flakes']
      }
    }
  },
  amber_grove: {
    id: 'amber_grove',
    name: 'AMBER GROVE',
    tagline: 'Golden resin under midnight sky.',
    category: 'warm',
    categoryLabel: 'Warm Amber',
    price: 230,
    image: 'images/perfume_aureum.png',
    description: 'A lush amber bouquet layered with incense and vanilla absolute. Rich, elegant, and softly luminous with a honeyed woody heart.',
    notes: {
      top: {
        title: 'Amber Resin & Orchid',
        description: 'Warm resinous amber softened by velvety orchid petals and a whisper of orange blossom.',
        ingredients: ['Golden Amber Resin', 'Orchid Accord', 'Orange Blossom']
      },
      heart: {
        title: 'Guaiac Wood & Vanilla',
        description: 'A creamy woody heart of guaiac wood and Madagascar vanilla bean that envelopes the scent with deep warmth.',
        ingredients: ['Guaiac Wood', 'Madagascar Vanilla', 'Labdanum']
      },
      base: {
        title: 'Incense Musk',
        description: 'A magnetic finish of incense smoke, amber musk, and warm leather undercurrents.',
        ingredients: ['White Musk', 'Labdanum Resin', 'Sandalwood']
      }
    }
  },
  velvet_dusk: {
    id: 'velvet_dusk',
    name: 'VELVET DUSK',
    tagline: 'A rose-lined embrace of the night.',
    category: 'spicy',
    categoryLabel: 'Dark Floral',
    price: 240,
    image: 'images/perfume_nocturne.png',
    description: 'A sumptuous blend of dark roses, black currant, and smoke. It unfolds slowly to reveal leathered petals and powdery woods.',
    notes: {
      top: {
        title: 'Black Currant & Pink Pepper',
        description: 'Bright crushed currant and spicy pink pepper create a vivid, fruity floral opening.',
        ingredients: ['Black Currant', 'Pink Pepper', 'Bergamot']
      },
      heart: {
        title: 'Damask Rose & Iris',
        description: 'A velvet floral heart of damask rose and aged iris butter with a smoky, powdery nuance.',
        ingredients: ['Damask Rose', 'Florentine Iris', 'Cistus']
      },
      base: {
        title: 'Smoked Cocoa & Leather',
        description: 'A grounded finish of dark cocoa, soft leather, and dry cedar that lingers like velvet wrapped in shadow.',
        ingredients: ['Cocoa Absolute', 'Leather Accord', 'Dry Cedar']
      }
    }
  },
  lune_reverie: {
    id: 'lune_reverie',
    name: 'LUNE RÊVERIE',
    tagline: 'Moonlit florals with mineral depth.',
    category: 'limited',
    categoryLabel: 'Limited Edition',
    price: 275,
    image: 'images/perfume_eclipse.png',
    description: 'A rare limited edition with night jasmine, iris, and mineral slate. Powdery yet luminous, it reveals luminous coolness and dark earth.',
    notes: {
      top: {
        title: 'Night Jasmine & Mint',
        description: 'A luminous floral opening brightened with cool mint and luminous jasmine dew.',
        ingredients: ['Night Jasmine', 'Spearmint', 'Ylang-Ylang']
      },
      heart: {
        title: 'Iris Butter & Frosted Petals',
        description: 'A powdery iris heart accented with delicate white petals and cold vetiver smoke.',
        ingredients: ['Iris Butter', 'White Petals', 'Vetiver Smoke']
      },
      base: {
        title: 'Mineral Slate & Cashmere Musk',
        description: 'A crystalline base of mineral slate, musk, and transparent woods that keeps the trail airy and precise.',
        ingredients: ['Mineral Slate', 'Cashmere Musk', 'Transparent Cedar']
      }
    }
  },
  auric_duo_set: {
    id: 'auric_duo_set',
    name: 'AURIC DUO SET',
    tagline: 'A matched pair of gold & shadow.',
    category: 'set',
    categoryLabel: 'Gift Set',
    price: 320,
    image: 'images/perfume_aureum.png',
    description: 'A luxurious pairing of AUREUM and ÉCLIPSE in a handcrafted presentation box, with a sample vial and scent guide for ritual layering.',
    notes: {
      top: {
        title: 'Dual Opening',
        description: 'A balanced first impression of warmth and cool mineral smoke, designed to highlight both fragrances together.',
        ingredients: ['Saffron', 'Amber', 'Frankincense']
      },
      heart: {
        title: 'Layered Complexity',
        description: 'A lush heart that bridges amber richness with soft vetiver and floral clarity.',
        ingredients: ['Oud', 'Jasmine', 'Vetiver']
      },
      base: {
        title: 'Presentational Finish',
        description: 'A polished, collectible set with velvet and gold details meant for gifting and display.',
        ingredients: ['Gold Leaf', 'Leather', 'Dry Amber']
      }
    }
  },
  maritime_gold: {
    id: 'maritime_gold',
    name: 'MARITIME GOLD',
    tagline: 'Oceanic amber, salt air, and gilded warmth.',
    category: 'set',
    categoryLabel: 'Gift Set',
    price: 295,
    image: 'images/perfume_eclipse.png',
    description: 'A gift set pairing SOLIS with a travel spray of AURIC DUO for an elevated sea-inspired ritual with golden warmth.',
    notes: {
      top: {
        title: 'Salted Citrus',
        description: 'A bright coastal opening with citrus peel and sea salt crystals.',
        ingredients: ['Mandarin', 'Sea Salt', 'Ginger']
      },
      heart: {
        title: 'Tropical Amber',
        description: 'Soft coconut and amber blossom create a warm floral center.',
        ingredients: ['Coconut Husk', 'Orange Blossom', 'Benzoin']
      },
      base: {
        title: 'Golden Musk',
        description: 'A warm marine drydown finished with golden sandalwood and musk.',
        ingredients: ['Sandalwood', 'Musk', 'Amber Resin']
      }
    }
  },
  obsidian_shade: {
    id: 'obsidian_shade',
    name: 'OBSIDIAN SHADE',
    tagline: 'A ritual offering of smoke and midnight bloom.',
    category: 'set',
    categoryLabel: 'Gift Set',
    price: 310,
    image: 'images/perfume_nocturne.png',
    description: 'An evening ritual set with NOCTURNE and a scented candle, created for atmospheric layering and contemplative nights.',
    notes: {
      top: {
        title: 'Smoky Floral Opening',
        description: 'A fragrant opening of rose and incense smoke to prepare the senses for the ritual.',
        ingredients: ['Rose', 'Incense', 'Black Pepper']
      },
      heart: {
        title: 'Velvet Ceremony',
        description: 'A rich heart of dark petals and resinous woods, slow to bloom and linger.',
        ingredients: ['Damask Rose', 'Patchouli', 'Cedar']
      },
      base: {
        title: 'Candle Light & Leather',
        description: 'A warm, tactile base that echoes leather-bound books, smoked resin, and glowing wax.',
        ingredients: ['Leather Accord', 'Smoke', 'Wax']
      }
    }
  },
  nocturne: {
    id: 'nocturne',
    name: 'NOCTURNE',
    tagline: 'Fragrance of the shadow, essence of gold.',
    category: 'spicy',
    categoryLabel: 'Dark Floral',
    price: 260,
    image: 'images/perfume_nocturne.png',
    description: 'A highly spicy, romantic midnight floral. Heavy crimson velvet rose and dark iris petals are sharpened by hot black peppercorn, and blanketed in a base of deep Indonesian patchouli and salty black ambergris.',
    notes: {
      top: {
        title: 'Black Peppercorn & Cardamom',
        description: 'A sharp, aromatic burst of freshly crushed black pepper and warm, resinous green cardamom pods.',
        ingredients: ['Malabar Black Peppercorn', 'Green Cardamom', 'Pink Pepper']
      },
      heart: {
        title: 'Velvet Rose & Dark Iris',
        description: 'An elegant, dusty floral heart of dark red crimson roses and powdery root of Florentine iris.',
        ingredients: ['Velvet Crimson Rose', 'Florentine Iris Root', 'Night Orchid']
      },
      base: {
        title: 'Indonesian Patchouli, Cedarwood & Ambergris',
        description: 'A dark, damp forest floor accord. Intense patchouli leaf, dry cedarwood bark, and a warm, salty ambergris blanket.',
        ingredients: ['Indonesian Patchouli', 'Atlas Cedarwood', 'Salty Black Ambergris', 'Golden Resin Oil']
      }
    }
  },
  iris_mud: {
    id: 'iris_mud',
    name: 'IRIS MUD',
    tagline: 'Powdery iris, velvet earth.',
    category: 'spicy',
    categoryLabel: 'Dark Floral',
    price: 235,
    image: 'images/perfume_nocturne.png',
    description: 'A powdery dark iris root formulation blended with black vanilla beans, violet leaves, and rich spices. Mysterious, velvet, and delicate.',
    notes: {
      top: {
        title: 'Violet Leaf & Coriander Seed',
        description: 'A fresh, green, and slightly spicy opening of crashed violet leaves and coriander.',
        ingredients: ['Violet Leaf', 'Coriander Seed', 'Pink Peppercorn']
      },
      heart: {
        title: 'Florentine Iris & Black Orchid',
        description: 'A luxurious, powdery core of premium Florentine iris butter and midnight orchids.',
        ingredients: ['Florentine Iris Butter', 'Black Orchid', 'Powdery Musk']
      },
      base: {
        title: 'Black Vanilla & Patchouli',
        description: 'A sweet, earthy base of smoky Madagascar vanilla pod extract and rich Indonesian patchouli.',
        ingredients: ['Madagascar Vanilla', 'Indonesian Patchouli Leaf', 'Benzoin Resin']
      }
    }
  },
  neroli_rouge: {
    id: 'neroli_rouge',
    name: 'NEROLI ROUGE',
    tagline: 'Fiery blossom, hot spice.',
    category: 'spicy',
    categoryLabel: 'Dark Floral',
    price: 220,
    image: 'images/perfume_nocturne.png',
    description: 'Spicy neroli flower, dark orange blossom, hot ginger root, and warm musk. Seductive, fiery, and deeply warming.',
    notes: {
      top: {
        title: 'Ginger Root & Bitter Orange',
        description: 'A sharp, hot opening of freshly sliced ginger root and zesty bitter Seville orange.',
        ingredients: ['Ginger Root', 'Seville Orange', 'Pink Grapefruit']
      },
      heart: {
        title: 'Spicy Neroli & Jasmine buds',
        description: 'A highly floral, spicy heart of steam-distilled Italian neroli and night-blooming jasmine.',
        ingredients: ['Italian Neroli', 'Jasmine Grandiflorum', 'Red Pimento']
      },
      base: {
        title: 'Red Musk & Vetiver Grass',
        description: 'A warm, animalic base of dark red musk, dry Haitian vetiver, and sweet benzoin.',
        ingredients: ['Red Musk', 'Haitian Vetiver', 'Siam Benzoin']
      }
    }
  }
};

// State Variables
let cart = [];
let currentStyle = 'classic';
let currentPage = 'home';

// ==========================================================================
// 2. HERO CASCADE REVEAL
// ==========================================================================
function triggerTypingEffect() {
  const brandEl = document.getElementById('heroBrandName');
  const taglineEl = document.getElementById('heroTagline');
  const heroContent = document.querySelector('.hero-content');

  if (!brandEl || !taglineEl || !heroContent) return;

  let taglineText = "Liquid gold, bottled darkness.";
  if (currentStyle === 'minimalist') {
    taglineText = "Stark contrast. Silent luxury.";
  } else if (currentStyle === 'obsidian') {
    taglineText = "Liquid velvet, obsidian glass.";
  }
  taglineEl.textContent = taglineText;

  // Split brand name into letter spans with a staggered delay index
  const brandText = brandEl.getAttribute('aria-label') || 'AUREUM';
  brandEl.innerHTML = brandText
    .split('')
    .map((ch, i) => `<span class="char" style="--char-i:${i}">${ch}</span>`)
    .join('');

  // Restart the cascade: clear state, force a reflow, then re-apply so
  // the transitions replay from their initial values
  brandEl.classList.remove('is-revealed');
  heroContent.classList.remove('hero-in');
  void brandEl.offsetWidth;

  brandEl.classList.add('is-revealed');
  heroContent.classList.add('hero-in');
}

// ==========================================================================
// 3. ARCHETYPE / STYLE SWITCHER
// ==========================================================================
function initStyleSwitcher() {
  const buttons = document.querySelectorAll('.style-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const styleValue = btn.getAttribute('data-value');
      if (styleValue === currentStyle) return;

      // Update active class on switcher
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Swap body theme
      currentStyle = styleValue;
      document.body.setAttribute('data-style', styleValue);

      // Dynamically swap hero image to showcase style alignment
      const heroImg = document.getElementById('heroPerfumeImg');
      if (heroImg) {
        if (styleValue === 'classic') {
          heroImg.src = 'images/perfume_aureum.png';
        } else if (styleValue === 'minimalist') {
          heroImg.src = 'images/perfume_eclipse.png';
        } else if (styleValue === 'obsidian') {
          heroImg.src = 'images/perfume_nocturne.png';
        }
      }

      // Re-trigger typing effect in the new style font/tagline
      if (currentPage === 'home') {
        triggerTypingEffect();
      }

      // Show Archetype Change Toast
      let styleName = "Classic Opulence";
      if (styleValue === 'minimalist') styleName = "Midnight Minimalist";
      if (styleValue === 'obsidian') styleName = "Sensual Obsidian";
      showToast(`Visual Archetype switched to: ${styleName}`);
    });
  });

  const controller = document.getElementById('styleController');
  const toggleBtn = document.getElementById('styleControllerToggle');
  if (controller && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isCollapsed = controller.classList.toggle('collapsed');
      toggleBtn.setAttribute('aria-expanded', String(!isCollapsed));
      toggleBtn.querySelector('.toggle-label').textContent = isCollapsed ? 'Show' : 'Hide';
    });
  }
}

// ==========================================================================
// 4. ROUTER & PAGE TRANSITIONS
// ==========================================================================
function navigateTo(pageId) {
  const targetPanel = document.getElementById(`page-${pageId}`);
  if (!targetPanel) return;
  if (pageId === currentPage && targetPanel.classList.contains('active')) return;

  const curtain = document.getElementById('pageCurtain');
  if (!curtain) return;

  // Trigger curtain sweep close
  curtain.classList.add('triggering');

  setTimeout(() => {
    // 1. Swap active panels
    document.querySelectorAll('.page-panel').forEach(panel => {
      panel.classList.remove('active');
    });
    
    const targetPanel = document.getElementById(`page-${pageId}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }

    // 2. Update navigation active state
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    currentPage = pageId;
    window.scrollTo({ top: 0 });
    window.location.hash = pageId;

    // 3. Render content if navigating to shop
    if (pageId === 'shop') {
      renderShopProducts();
    }
    
    // 4. Re-run typing animation if home
    if (pageId === 'home') {
      triggerTypingEffect();
    }

    // Trigger scroll reveal scan for the newly visible page elements
    initScrollReveal();

  }, 600); // Trigger panel swap mid-curtain

  setTimeout(() => {
    // Open curtain back up
    curtain.classList.remove('triggering');
  }, 1200);
}

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute('data-page');
      navigateTo(targetPage);
      if (mainNav && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
      }
      if (mobileToggle) {
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const logoLink = document.getElementById('logoLink');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('home');
      if (mainNav && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
      }
      if (mobileToggle) {
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      mobileToggle.classList.toggle('active', open);
      mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.addEventListener('keydown', (e) => {
    const activeElement = document.activeElement;
    if (!activeElement) return;
    const isRoleButton = activeElement.getAttribute('role') === 'button';
    const isClickableCard = activeElement.classList.contains('triad-card') || activeElement.classList.contains('ingredient-card');
    if ((isRoleButton || isClickableCard) && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      activeElement.click();
    }
  });
}

// ==========================================================================
// 5. SHOP RENDER & FILTERS
// ==========================================================================
function renderShopProducts(filter = 'all') {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;

  grid.innerHTML = '';

  Object.values(PRODUCTS).forEach(prod => {
    if (filter !== 'all' && prod.category !== filter) return;

    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('onclick', `viewProductDetail('${prod.id}')`);

    const badge = prod.category === 'limited'
      ? '<span class="card-badge">Limited Edition</span>'
      : (prod.category === 'set' ? '<span class="card-badge">Gift Set</span>' : '');

    card.innerHTML = `
      ${badge}
      <div class="product-img-container">
        <img src="${prod.image}" alt="${prod.name}" class="product-img">
      </div>
      <div class="product-info">
        <h3>${prod.name}</h3>
        <p class="product-tagline">${prod.tagline}</p>
        <div class="product-price-row">
          <span class="product-price">$${prod.price}</span>
          <button class="btn-add-cart-quick" data-id="${prod.id}" title="Quick Add">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Prevent click on quick-add button from opening product detail
    const quickAddBtn = card.querySelector('.btn-add-cart-quick');
    quickAddBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = quickAddBtn.getAttribute('data-id');
      addToCart(pid, 1);
    });

    grid.appendChild(card);
  });
}

function initShopFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderShopProducts(filterValue);
    });
  });
}

// ==========================================================================
// 6. PRODUCT DETAIL & NOTE EXPLORER
// ==========================================================================
function viewProductDetail(productId) {
  const product = PRODUCTS[productId];
  if (!product) return;

  const layout = document.getElementById('productDetailLayout');
  if (!layout) return;

  layout.innerHTML = `
    <div class="detail-gallery">
      <img src="${product.image}" alt="${product.name}" class="detail-gallery-img floating-animation">
    </div>
    <div class="detail-info">
      <span class="detail-tag">${product.categoryLabel}</span>
      <h1 class="detail-title">${product.name}</h1>
      <p class="detail-tagline">${product.tagline}</p>
      <div class="detail-price">$${product.price}</div>
      <p class="detail-desc">${product.description}</p>
      
      <div class="detail-actions">
        <div class="qty-selector">
          <button class="qty-btn" onclick="adjustDetailQty(-1)" aria-label="Decrease quantity">&minus;</button>
          <span class="qty-val" id="detailQtyVal">1</span>
          <button class="qty-btn" onclick="adjustDetailQty(1)" aria-label="Increase quantity">&plus;</button>
        </div>
        <button class="btn btn-primary detail-add-btn" onclick="addDetailToCart('${product.id}')">Add to Shopping Bag</button>
      </div>

      <!-- Scent Note Explorer Pyramid -->
      <div class="scent-pyramid-container">
        <h3 class="scent-pyramid-title">Olfactory Architecture</h3>
        <div class="scent-pyramid">
          
          <!-- Top Layer -->
          <div class="pyramid-layer" onclick="openNoteModal('${productId}', 'top')">
            <div class="layer-meta">
              <span class="layer-indicator">Top Note</span>
              <span class="layer-notes">${product.notes.top.title}</span>
            </div>
            <span class="pyramid-action-label">Deconstruct &rsaquo;</span>
          </div>

          <!-- Heart Layer -->
          <div class="pyramid-layer" onclick="openNoteModal('${productId}', 'heart')">
            <div class="layer-meta">
              <span class="layer-indicator">Heart Note</span>
              <span class="layer-notes">${product.notes.heart.title}</span>
            </div>
            <span class="pyramid-action-label">Deconstruct &rsaquo;</span>
          </div>

          <!-- Base Layer -->
          <div class="pyramid-layer" onclick="openNoteModal('${productId}', 'base')">
            <div class="layer-meta">
              <span class="layer-indicator">Base Note</span>
              <span class="layer-notes">${product.notes.base.title}</span>
            </div>
            <span class="pyramid-action-label">Deconstruct &rsaquo;</span>
          </div>

        </div>
      </div>

      <!-- Scent Layering -->
      <div class="scent-layering-container">
        <h3>Olfactory Layering Harmony</h3>
        <p>
          This archetype layers beautifully with other elements in our catalog. Spritzing <strong>${product.name}</strong> as a base, followed by a lighter layer of <strong>${productId === 'aureum' ? 'ÉCLIPSE' : 'AUREUM'}</strong>, creates a bespoke, dry ambery incense trail.
        </p>
      </div>
    </div>
  `;

  // Navigate to Detail panel
  navigateTo('detail');
}

function adjustDetailQty(delta) {
  const qtyEl = document.getElementById('detailQtyVal');
  if (!qtyEl) return;
  let currentVal = parseInt(qtyEl.textContent);
  currentVal += delta;
  if (currentVal < 1) currentVal = 1;
  qtyEl.textContent = currentVal;
}

function addDetailToCart(productId) {
  const qtyEl = document.getElementById('detailQtyVal');
  const qty = qtyEl ? parseInt(qtyEl.textContent) : 1;
  addToCart(productId, qty);
  // Reset quantity selector
  if (qtyEl) qtyEl.textContent = '1';
}

// Scent Note Modal Explorer
function openNoteModal(productId, tier) {
  const product = PRODUCTS[productId];
  if (!product || !product.notes[tier]) return;

  const noteData = product.notes[tier];
  const modal = document.getElementById('noteModal');
  const content = document.getElementById('noteModalContent');
  if (!modal || !content) return;

  let tierLabel = "Top Scent Note";
  if (tier === 'heart') tierLabel = "Heart Core Scent Note";
  if (tier === 'base') tierLabel = "Base Foundation Scent Note";

  content.innerHTML = `
    <div class="note-modal-header">
      <div class="note-tier">${tierLabel}</div>
      <h3>${noteData.title}</h3>
    </div>
    <div class="note-modal-body">
      <p>${noteData.description}</p>
      <h4>Blended Ingredients:</h4>
      <div class="note-ingredients-list">
        ${noteData.ingredients.map(ing => `<span class="note-tag">${ing}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeNoteModal() {
  const modal = document.getElementById('noteModal');
  if (modal) modal.classList.remove('active');
}

// ==========================================================================
// 7. SHOPPING CART LOGIC
// ==========================================================================
function addToCart(productId, qty) {
  const product = PRODUCTS[productId];
  if (!product) return;

  const existingItemIndex = cart.findIndex(item => item.product.id === productId);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].qty += qty;
  } else {
    cart.push({
      product: product,
      qty: qty
    });
  }

  updateCart();
  showToast(`${product.name} added to shopping bag.`);
  openCart();
}

function updateCartQty(productId, delta) {
  const itemIndex = cart.findIndex(item => item.product.id === productId);
  if (itemIndex > -1) {
    cart[itemIndex].qty += delta;
    if (cart[itemIndex].qty <= 0) {
      cart.splice(itemIndex, 1);
    }
    updateCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  updateCart();
  showToast("Item removed from bag.");
}

function updateCart() {
  const cartBadge = document.getElementById('cartBadge');
  const cartItems = document.getElementById('cartItems');
  const cartSubtotal = document.getElementById('cartSubtotal');
  
  if (!cartBadge || !cartItems || !cartSubtotal) return;

  // Calculate items quantity
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadge.textContent = totalQty;

  // Render items
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart-message">
        <p>Your shopping bag is empty.</p>
        <button class="btn btn-primary" onclick="navigateTo('shop'); closeCart();">Shop Now</button>
      </div>
    `;
    cartSubtotal.textContent = "$0.00";
    return;
  }

  cartItems.innerHTML = '';
  let subtotal = 0;

  cart.forEach(item => {
    const itemSubtotal = item.product.price * item.qty;
    subtotal += itemSubtotal;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <div class="cart-item-img-container">
        <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
      </div>
      <div class="cart-item-details">
        <h4>${item.product.name}</h4>
        <p class="cart-item-tagline">${item.product.tagline}</p>
        <div class="cart-item-pricing">
          <div class="cart-item-qty">
            <button class="qty-tiny-btn" onclick="updateCartQty('${item.product.id}', -1)" aria-label="Decrease">&minus;</button>
            <span class="qty-tiny-val">${item.qty}</span>
            <button class="qty-tiny-btn" onclick="updateCartQty('${item.product.id}', 1)" aria-label="Increase">&plus;</button>
          </div>
          <span class="cart-item-price">$${itemSubtotal}</span>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart('${item.product.id}')">Remove</button>
      </div>
    `;
    cartItems.appendChild(itemEl);
  });

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
  }
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  }
}

function initCartUI() {
  const cartBtn = document.getElementById('cartToggleBtn');
  const closeBtn = document.getElementById('closeCartBtn');
  const overlay = document.getElementById('cartOverlay');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast("Your cart is empty.");
        return;
      }

      checkoutBtn.disabled = true;
      const originalText = checkoutBtn.textContent;
      checkoutBtn.innerHTML = `
        <span style="display:inline-flex; align-items:center; gap: 8px;">
          <svg width="18" height="18" viewBox="0 0 38 38" stroke="currentColor" style="animation: spin 1s linear infinite">
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".2" cx="18" cy="18" r="18"/>
                <path d="M36 18c0-9.94-8.06-18-18-18" />
              </g>
            </g>
          </svg>
          Processing...
        </span>
      `;

      // Mock checkout completion animation
      setTimeout(() => {
        checkoutBtn.disabled = false;
        checkoutBtn.textContent = originalText;
        
        // Show success screen inside cart drawer
        const cartItems = document.getElementById('cartItems');
        const cartSubtotal = document.getElementById('cartSubtotal');
        if (cartItems && cartSubtotal) {
          cartItems.innerHTML = `
            <div class="order-success">
              <svg viewBox="0 0 24 24" width="48" height="48">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
                <polyline points="16 9 11 14 8 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h3>Order Secured</h3>
              <p>
                Thank you for choosing AUREUM. An email confirmation has been sent, and your priority shipment will prepare shortly.
              </p>
              <button class="btn btn-primary" onclick="resetCartAndClose()">Return to Shop</button>
            </div>
          `;
          cartSubtotal.textContent = "$0.00";
        }
        
        showToast("Order placed successfully!");
      }, 2000);
    });
  }
}

function resetCartAndClose() {
  cart = [];
  updateCart();
  closeCart();
  navigateTo('shop');
}

// Add simple CSS spin keyframe for the loader dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// ==========================================================================
// 8. TOAST NOTIFICATION SYSTEM
// ==========================================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-success-symbol">♦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto remove toast after animation complete
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// ==========================================================================
// 8.5 INGREDIENT INSPECTOR & QUIZ SYSTEM (NEW CONTENT)
// ==========================================================================
const INGREDIENTS_INFO = {
  oud: {
    title: "Agarwood (Oud)",
    sub: "The Liquid Gold Resin",
    desc: "A highly aromatic resin produced by Aquilaria trees when infected by a rare mold. Steam-distilled in copper vessels for months, it produces a heavy, woody, balsamic oil prized as the most precious oil in the world. It provides the dark, ancient structural baseline for AUREUM.",
    tags: ["Resinous", "Primeval Wood", "Smoky Balsamic"]
  },
  ambergris: {
    title: "Marine Ambergris",
    sub: "Floating Marine Gold",
    desc: "A rare waxy substance produced in the digestive tract of sperm whales. When exposed to ocean currents and sunlight for years, it oxidizes, developing a sweet, marine, earthy, and warm aroma. It fixes other notes on the skin, allowing scent molecules to mature.",
    tags: ["Marine Salt", "Warm Mineral", "Fixative"]
  },
  rose: {
    title: "Crimson Velvet Rose",
    sub: "Nocturnal Damask Petals",
    desc: "Plucked in darkness before dawn to capture the absolute highest concentration of night oils. It yields a rich, heavy, dusty, honeyed floral scent that acts as the emotional core of our blends, offsetting the volcanic dark resins.",
    tags: ["Crimson Floral", "Smoked Honey", "Velvety Core"]
  },
  gold: {
    title: "24k Gold Leaf",
    sub: "Pure Shimmering Metallic Element",
    desc: "Hand-crafted micro-sheets of pure 24k gold leaf, suspended in organic almond oil. Beyond its dramatic floating visual presence inside each bottle, the gold releases subtle metallic compounds that enrich the molecular projection of the perfume oils.",
    tags: ["Metallic Glow", "Gold Foil", "Suspension Element"]
  }
};

function inspectIngredient(ingId) {
  const info = INGREDIENTS_INFO[ingId];
  if (!info) return;

  const modal = document.getElementById('noteModal');
  const content = document.getElementById('noteModalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="note-modal-header">
      <div class="note-tier">${info.sub}</div>
      <h3>${info.title}</h3>
    </div>
    <div class="note-modal-body">
      <p>${info.desc}</p>
      <h4>Aromatic Attributes:</h4>
      <div class="note-ingredients-list">
        ${info.tags.map(tag => `<span class="note-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
}

let quizState = {
  step: 0,
  answers: []
};

function openProfilerQuiz() {
  quizState.step = 0;
  quizState.answers = [];
  
  const modal = document.getElementById('noteModal');
  const content = document.getElementById('noteModalContent');
  if (!modal || !content) return;
  
  renderQuizStep(content);
  modal.classList.add('active');
}

function renderQuizStep(content) {
  const questions = [
    {
      q: "What environment triggers your senses?",
      options: [
        { text: "A grand candlelit library", style: "classic" },
        { text: "A raw minimalist concrete chamber", style: "minimalist" },
        { text: "A smoky obsidian volcanic shore", style: "obsidian" }
      ]
    },
    {
      q: "Select your preferred texture.",
      options: [
        { text: "Soft heavy velvet", style: "classic" },
        { text: "Stark cold metal", style: "minimalist" },
        { text: "Glossy dark liquid glass", style: "obsidian" }
      ]
    },
    {
      q: "Choose your primary mood.",
      options: [
        { text: "Opulence & Sophistication", style: "classic" },
        { text: "Starkness & Solitude", style: "minimalist" },
        { text: "Sensuality & Mystery", style: "obsidian" }
      ]
    }
  ];

  if (quizState.step < questions.length) {
    const cur = questions[quizState.step];
    content.innerHTML = `
      <div class="note-modal-header">
        <div class="note-tier">Olfactory Profiling - Step ${quizState.step + 1} of 3</div>
        <h3>${cur.q}</h3>
      </div>
      <div class="quiz-options">
        ${cur.options.map((opt) => `
          <button class="quiz-option" onclick="answerQuizStep('${opt.style}')">
            ${opt.text}
          </button>
        `).join('')}
      </div>
    `;
  } else {
    // Calculate result
    const counts = { classic: 0, minimalist: 0, obsidian: 0 };
    quizState.answers.forEach(ans => counts[ans]++);
    
    let resultStyle = "classic";
    let resultTitle = "Classic Opulence";
    let resultDesc = "You seek warmth, traditional luxury, and rich, complex ambery depths. Your matching fragrance is AUREUM.";
    let matchPerfume = "aureum";
    
    if (counts.minimalist > counts.classic && counts.minimalist >= counts.obsidian) {
      resultStyle = "minimalist";
      resultTitle = "Midnight Minimalist";
      resultDesc = "You prefer clean stark lines, cold high-contrast modernism, and raw mineral structures. Your matching fragrance is ÉCLIPSE.";
      matchPerfume = "eclipse";
    } else if (counts.obsidian > counts.classic && counts.obsidian > counts.minimalist) {
      resultStyle = "obsidian";
      resultTitle = "Sensual Obsidian";
      resultDesc = "You thrive in liquid shadow, deep neon-glow environments, and sweet organic mysteries. Your matching fragrance is NOCTURNE.";
      matchPerfume = "nocturne";
    }

    content.innerHTML = `
      <div class="note-modal-header">
        <div class="note-tier">Olfactory Profile Match</div>
        <h3>${resultTitle}</h3>
      </div>
      <div class="quiz-result">
        <p>${resultDesc}</p>
        <div class="quiz-result-actions">
          <button class="btn btn-primary" onclick="applyQuizResultTheme('${resultStyle}', '${matchPerfume}')">View Your Scent</button>
          <button class="btn btn-ghost" onclick="closeNoteModal()">Close</button>
        </div>
      </div>
    `;
  }
}

function answerQuizStep(style) {
  quizState.answers.push(style);
  quizState.step++;
  const content = document.getElementById('noteModalContent');
  renderQuizStep(content);
}

function applyQuizResultTheme(style, perfumeId) {
  closeNoteModal();
  
  // 1. Swap visual theme
  const btn = document.querySelector(`.style-btn[data-value="${style}"]`);
  if (btn) btn.click();
  
  // 2. Navigate to matched product details
  setTimeout(() => {
    viewProductDetail(perfumeId);
  }, 600);
}

// Close Note modal on outer click
window.addEventListener('click', (e) => {
  const modal = document.getElementById('noteModal');
  if (e.target === modal) {
    closeNoteModal();
  }
});

// ==========================================================================
// 9. SCROLL REVEAL OBSERVER
// ==========================================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-left');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.1
  });

  // Reset all, force one reflow so the entrance transition can replay,
  // then reveal in-view elements immediately and observe the rest
  revealElements.forEach(el => el.classList.remove('revealed'));
  void document.body.offsetWidth;

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}

// ==========================================================================
// 10. APP INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initStyleSwitcher();
  initNavigation();
  initShopFilters();
  initCartUI();
  updateCart();

  const hashPage = window.location.hash.replace('#', '');
  if (hashPage && document.getElementById(`page-${hashPage}`)) {
    navigateTo(hashPage);
  } else {
    triggerTypingEffect();
    initScrollReveal();
  }
});
