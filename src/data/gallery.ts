import heroLoomImg from '@/src/assets/images/hero_textile_loom_1791307545790.jpg';
import aboutCraftImg from '@/src/assets/images/about_textile_craft_1791307559505.jpg';
import cottonRollsImg from '@/src/assets/images/cotton_fabric_rolls_1791307571018.jpg';
import yarnShuttleImg from '@/src/assets/images/textile_shuttle_yarn_1791307583691.jpg';
import wovenTextureImg from '@/src/assets/images/woven_fabric_texture_1791307594915.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-loom-machine',
    title: 'Textile Loom in Action',
    category: 'Weaving Machinery',
    description: 'Precision mechanical loom weaving fine cotton fabric with balanced warp tension and steady rhythm.',
    image: heroLoomImg
  },
  {
    id: 'gallery-craftsman-hands',
    title: 'Skilled Weaving Craftsmanship',
    category: 'Artisanal Technique',
    description: 'Master weaver guiding the pirn shuttle through tightly drawn cotton threads at the Namakkal facility.',
    image: aboutCraftImg
  },
  {
    id: 'gallery-fabric-closeup',
    title: 'Woven Fabric Texture Close-up',
    category: 'Fabric Detail',
    description: 'Macro view showing crisp warp and weft intersections, uniform thread count, and natural cotton sheen.',
    image: wovenTextureImg
  },
  {
    id: 'gallery-textile-rolls',
    title: 'Finished Cotton Fabric Rolls',
    category: 'Finished Textiles',
    description: 'Stacked rolls of inspected pure cotton fabric ready for packaging, grading, and dispatch.',
    image: cottonRollsImg
  },
  {
    id: 'gallery-yarn-cones',
    title: 'Yarn Cones & Shuttle Equipment',
    category: 'Material & Tools',
    description: 'Selected combed cotton yarn cones, pirns, and wooden shuttles arranged on the preparation bench.',
    image: yarnShuttleImg
  },
  {
    id: 'gallery-traditional-border',
    title: 'Traditional Tamil Nadu Weave Alignment',
    category: 'Regional Weaving',
    description: 'Fine warp threads drawn through the reed comb to produce authentic South Indian edge borders.',
    image: heroLoomImg
  },
  {
    id: 'gallery-raw-cotton-rolls',
    title: 'Loomstate Natural Fabric',
    category: 'Production Batch',
    description: 'Freshly woven greige cotton material displaying unbleached natural tones and organic fiber structure.',
    image: cottonRollsImg
  },
  {
    id: 'gallery-woven-grid',
    title: 'Structured Twill & Dobby Surface',
    category: 'Fabric Engineering',
    description: 'Detailed inspection of micro-patterned weaving surface highlighting clean selvedge boundaries.',
    image: wovenTextureImg
  }
];
