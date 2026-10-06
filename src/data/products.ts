// Generated image assets from local workspace
import cottonRollsImg from '@/src/assets/images/cotton_fabric_rolls_1791307571018.jpg';
import wovenTextureImg from '@/src/assets/images/woven_fabric_texture_1791307594915.jpg';
import craftImg from '@/src/assets/images/about_textile_craft_1791307559505.jpg';
import yarnShuttleImg from '@/src/assets/images/textile_shuttle_yarn_1791307583691.jpg';
import heroLoomImg from '@/src/assets/images/hero_textile_loom_1791307545790.jpg';

export interface Product {
  id: string;
  name: string;
  category: 'cotton' | 'woven' | 'traditional' | 'custom';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: {
    weaveType: string;
    yarnCount: string;
    width: string;
    finish: string;
  };
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'cotton-pure-weave',
    name: 'Pure Cotton Plain Weave Fabric',
    category: 'cotton',
    categoryLabel: 'Cotton Fabrics',
    shortDesc: 'Breathable, skin-friendly 100% cotton fabric with uniform weave structure and balanced tensile strength.',
    fullDesc: 'Our pure cotton plain weave fabric is woven with consistent tension to guarantee dimensional stability and excellent breathability. Perfect for apparel, home textiles, and custom printing, it accepts dyes uniformly and maintains durability through repeated washing.',
    features: [
      '100% pure combed natural cotton yarn',
      'Balanced warp and weft density for crisp drape',
      'Natural absorbency and high skin breathability',
      'Uniform selvedge for hassle-free cutting & tailoring'
    ],
    specs: {
      weaveType: 'Plain 1/1 Weave',
      yarnCount: '30s to 40s Combed Cotton',
      width: '44” / 48” / 54” Customisable',
      finish: 'Grey / Semi-bleached / Soft Finish'
    },
    image: cottonRollsImg
  },
  {
    id: 'woven-dobby-twill',
    name: 'Dobby & Twill Structured Woven Fabric',
    category: 'woven',
    categoryLabel: 'Woven Fabrics',
    shortDesc: 'Quality woven materials produced with attention to texture consistency, diagonal twill lines, and finish.',
    fullDesc: 'Engineered for enhanced mechanical endurance and subtle surface sheen, our twill and dobby woven textiles offer superior tear resistance and a luxurious hand feel. Suitable for workwear, shirting, uniforms, and fine upholstery.',
    features: [
      'Pronounced diagonal twill weave or dobby micro-pattern',
      'Higher thread count density for extended fabric life',
      'Resistant to wrinkles and surface pilling',
      'Precise reed-beat consistency across roll lengths'
    ],
    specs: {
      weaveType: '2/1 & 2/2 Twill / Micro Dobby',
      yarnCount: '20s to 60s Carded & Combed',
      width: '48” to 58” Customizable',
      finish: 'Pre-shrunk / Loomstate / Mercerized'
    },
    image: wovenTextureImg
  },
  {
    id: 'traditional-heritage-border',
    name: 'Traditional Tamil Nadu Border Weave',
    category: 'traditional',
    categoryLabel: 'Traditional Textiles',
    shortDesc: 'Textile products inspired by traditional South Indian weaving craftsmanship and authentic temple-edge borders.',
    fullDesc: 'Reflecting the time-honored weaving traditions of Namakkal and Tamil Nadu, this fabric incorporates distinguished border structures, contrasting weft threads, and classical regional edge details tailored for dhotis, angavastrams, and cultural textiles.',
    features: [
      'Authentic border motifs woven with specialized dobby harness',
      'Rich tactile texture rooted in regional handloom heritage',
      'Carefully aligned selvedge with traditional colored lines',
      'Comfortable lightweight drape suitable for warm climates'
    ],
    specs: {
      weaveType: 'Traditional Plain with Extra-Weft Border',
      yarnCount: '40s / 60s Fine Cotton',
      width: '48” / 50” Standard Dhoti Width',
      finish: 'Bleached & Softened with Crisp Border'
    },
    image: craftImg
  },
  {
    id: 'custom-yarn-dyed',
    name: 'Custom Yarn-Dyed Checks & Stripes',
    category: 'custom',
    categoryLabel: 'Custom Textile Requirements',
    shortDesc: 'Flexible textile options woven to exact client specifications, color patterns, and density requirements.',
    fullDesc: 'We work closely with clients to weave custom check grids, classic pin-stripes, and institutional fabrics using pre-dyed yarn. Every order is calibrated according to your repeat dimensions, yarn blend, and target fabric weight.',
    features: [
      'Custom colorway matching based on client swatches',
      'Tight pattern alignment across repetitive rolls',
      'Flexible minimum quantity options for tailored production',
      'Thorough inspection before batch packing'
    ],
    specs: {
      weaveType: 'Custom Plain / Dobby / Box Check',
      yarnCount: 'Client Specified (20s to 80s)',
      width: 'Up to 60” Customizable',
      finish: 'Loomstate / Stenter Finished'
    },
    image: yarnShuttleImg
  },
  {
    id: 'cotton-heavy-canvas',
    name: 'Medium-Weight Cotton Sheeting & Canvas',
    category: 'cotton',
    categoryLabel: 'Cotton Fabrics',
    shortDesc: 'Versatile and resilient cotton materials suitable for industrial packaging, utility covers, and domestic crafts.',
    fullDesc: 'A sturdy, natural weave fabric woven from robust cotton yarns. Highly appreciated for its natural beige/off-white appearance, high tensile load capacity, and eco-friendly composition.',
    features: [
      'High-strength single or doubled yarn construction',
      'Natural raw seed-mote texture (kora / greige)',
      'Substantial weight with high puncture resistance',
      'Biodegradable and free of harsh chemical coatings'
    ],
    specs: {
      weaveType: 'Heavy Plain Weave / Duck Canvas',
      yarnCount: '10s / 16s / 20s Open-End & Ring Spun',
      width: '36” to 60” Available',
      finish: 'Loomstate Grey Fabric'
    },
    image: cottonRollsImg
  },
  {
    id: 'woven-oxford-cotton',
    name: 'Fine Oxford & Basket Weave Textiles',
    category: 'woven',
    categoryLabel: 'Woven Fabrics',
    shortDesc: 'Classic basket-weave pattern offering porous air circulation, distinctive texture, and dependable structure.',
    fullDesc: 'Woven with two fine warp yarns paired against a heavier weft yarn to produce the iconic textured checkerboard look. Combines elegance with everyday wearability.',
    features: [
      'Distinctive pinpoint or classic basket-weave texture',
      'Optimal ventilation and temperature regulation',
      'Holds shape crisply across varied humidity levels',
      'Excellent tear strength compared to standard plains'
    ],
    specs: {
      weaveType: '2x1 Basket / Oxford Weave',
      yarnCount: '40/1 x 30/1 Combed Cotton',
      width: '44” / 58”',
      finish: 'Soft Flow Washed / Iron Finish'
    },
    image: wovenTextureImg
  },
  {
    id: 'traditional-veshti-material',
    name: 'Fine Woven Veshti & Saree Ground Fabric',
    category: 'traditional',
    categoryLabel: 'Traditional Textiles',
    shortDesc: 'Ultra-fine breathable cotton textiles woven for ethnic South Indian garments with fine yarn consistency.',
    fullDesc: 'Refined lightweight cotton produced for traditional South Indian attire. The fine yarn count ensures an airy drape that stays comfortable throughout long ceremonies and humid weather.',
    features: [
      'Silky hand feel created from premium combed cotton',
      'Uniform yarn twist avoiding surface irregularities',
      'Classic off-white & bleached shades available',
      'Woven on finely tuned precision reeds'
    ],
    specs: {
      weaveType: 'High-Density Fine Plain Weave',
      yarnCount: '60s & 80s Super Combed Cotton',
      width: '50” to 54” Traditional Sizing',
      finish: 'Optic White / Natural Kora'
    },
    image: heroLoomImg
  },
  {
    id: 'custom-industrial-spec',
    name: 'Specification-Based Industrial Textile Weaves',
    category: 'custom',
    categoryLabel: 'Custom Textile Requirements',
    shortDesc: 'Custom weaves manufactured for bulk industrial packaging, agricultural covers, and processing utilities.',
    fullDesc: 'Specialized fabric runs produced against strict engineering criteria for tensile strength, thread density (EPI/PPI), and roll packaging. Sitheswaran Tex adapts loom setups to match your technical brief.',
    features: [
      'Strict adherence to client-provided EPI and PPI guidelines',
      'Batch-to-batch roll length and weight consistency',
      'Rigorous visual inspection before dispatch from Namakkal',
      'Bulk roll wrapping protecting fabric during transit'
    ],
    specs: {
      weaveType: 'Engineered Plain / Rib Weave',
      yarnCount: 'As per custom technical sheet',
      width: 'Configurable to custom loom parameters',
      finish: 'Custom Loomstate or Heat-Set'
    },
    image: yarnShuttleImg
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'cotton', label: 'Cotton Fabrics' },
  { id: 'woven', label: 'Woven Fabrics' },
  { id: 'traditional', label: 'Traditional Textiles' },
  { id: 'custom', label: 'Custom Textiles' },
] as const;
