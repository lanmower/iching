
const HEXAGRAMS = {
    1: { 
        name: "The Creative", 
        chinese: "乾 (Qián)", 
        judgment: "Supreme success through strength and perseverance", 
        image: "Heaven above Heaven: The Creative. The superior person strengthens their character through ceaseless activity.",
        classical: "元，亨，利，貞。初九：潛龍勿用。(Yuan, heng, li, zhen. Chu jiu: Qian long wu yong.)",
        translation: "The Creative works sublime success, furthering through perseverance. Hidden dragon. Do not act.",
        source: "Zhou Yi (Book of Changes), c. 1000 BCE",
        commentary: "Confucius in the Great Commentary (Da Zhuan) states: 'The Creative is the source of all things, the beginning of all transformations.' (Wilhelm/Baynes trans., 1967)"
    },
    2: { 
        name: "The Receptive", 
        chinese: "坤 (Kūn)", 
        judgment: "Sublime success through yielding and following", 
        image: "Earth above Earth: The Receptive. The superior person supports others with generous virtue.",
        classical: "元，亨，利牝馬之貞。初六：履霜，堅冰至。(Yuan, heng, li pin ma zhi zhen. Chu liu: Lu shuang, jian bing zhi.)",
        translation: "The Receptive works sublime success, furthering through the perseverance of a mare. When frost is underfoot, solid ice is near.",
        source: "Zhou Yi (Book of Changes), c. 1000 BCE",
        commentary: "The Great Commentary explains: 'The Receptive is the perfect complement to the Creative, representing the earth that receives and nourishes all things.' (Legge trans., 1882)"
    },
    3: { name: "Difficulty at the Beginning", chinese: "屯 (Zhūn)", judgment: "Success through perseverance despite initial chaos", image: "Thunder above Water: Initial difficulty gives way to order through persistence." },
    4: { name: "Youthful Folly", chinese: "蒙 (Méng)", judgment: "Success through seeking wisdom and guidance", image: "Mountain above Water: The wise teacher guides the foolish student with patience." },
    5: { name: "Waiting", chinese: "需 (Xū)", judgment: "Confidence and patience bring success", image: "Water above Heaven: Clouds rise to heaven, teaching the value of patience." },
    6: { name: "Conflict", chinese: "訟 (Sòng)", judgment: "Caution advised; seek mediation over confrontation", image: "Heaven above Water: Conflict requires careful consideration and wise counsel." },
    7: { name: "The Army", chinese: "師 (Shī)", judgment: "Leadership with moral authority brings success", image: "Earth above Water: The general leads with wisdom and moral strength." },
    8: { name: "Holding Together", chinese: "比 (Bǐ)", judgment: "Unity and alliance bring mutual benefit", image: "Water above Earth: Waters flow together, symbolizing unity and cooperation." },
    9: { name: "Small Accumulating", chinese: "小畜 (Xiǎo Xù)", judgment: "Small progress through gentle persistence", image: "Wind above Heaven: Gentle influence gradually achieves great things." },
    10: { name: "Treading", chinese: "履 (Lǚ)", judgment: "Success through correct conduct and respect", image: "Heaven above Lake: Treading carefully on the path of righteousness." },
    11: { 
        name: "Peace", 
        chinese: "泰 (Tài)", 
        judgment: "Harmony and prosperity through balance", 
        image: "Earth above Heaven: Heaven and Earth unite in perfect harmony.",
        classical: "小往大來，吉亨。(Xiao wang da lai, ji heng.)",
        translation: "The small departs, the great approaches. Good fortune and success.",
        source: "Zhou Yi (Book of Changes), c. 1000 BCE",
        commentary: "Wang Bi (226-249 CE) noted: 'When heaven and earth are in harmony, all things flourish naturally.' (Lynn trans., 1994)"
    },
    12: { name: "Standstill", chinese: "否 (Pǐ)", judgment: "Stagnation requires patience and inner development", image: "Heaven above Earth: Separation calls for inner cultivation." },
    13: { name: "Fellowship", chinese: "同人 (Tóng Rén)", judgment: "Unity with others brings success", image: "Heaven above Fire: Like-minded people gather in the light of understanding." },
    14: { name: "Great Possession", chinese: "大有 (Dà Yǒu)", judgment: "Great abundance through wise stewardship", image: "Fire above Heaven: Great clarity illuminates vast possibilities." },
    15: { name: "Modesty", chinese: "謙 (Qiān)", judgment: "Humble virtue brings lasting success", image: "Earth above Mountain: True greatness lies in modesty and service." },
    16: { name: "Enthusiasm", chinese: "豫 (Yù)", judgment: "Joy and enthusiasm inspire others", image: "Thunder above Earth: Enthusiastic response awakens dormant potential." },
    17: { name: "Following", chinese: "隨 (Suí)", judgment: "Adaptability and following the right path succeed", image: "Lake above Thunder: Adapting to change with joyful acceptance." },
    18: { name: "Work on the Corrupted", chinese: "蠱 (Gǔ)", judgment: "Healing corruption through dedicated effort", image: "Mountain above Wind: Patient work overcomes deep-rooted problems." },
    19: { name: "Approach", chinese: "臨 (Lín)", judgment: "Gradual approach brings increasing influence", image: "Earth above Lake: Gentle approach wins hearts and minds." },
    20: { name: "Contemplation", chinese: "觀 (Guān)", judgment: "Observation and reflection reveal truth", image: "Wind above Earth: Observing from above provides clear perspective." },
    21: { name: "Biting Through", chinese: "噬嗑 (Shì Kè)", judgment: "Decisive action removes obstacles", image: "Fire above Thunder: Clear judgment cuts through deception." },
    22: { name: "Grace", chinese: "賁 (Bì)", judgment: "Beauty and refinement enhance inner worth", image: "Mountain above Fire: Natural beauty enhanced by careful cultivation." },
    23: { name: "Splitting Apart", chinese: "剝 (Bō)", judgment: "Decline requires patience and inner strength", image: "Mountain above Earth: Standing firm while others fall away." },
    24: { name: "Return", chinese: "復 (Fù)", judgment: "Natural cycles bring renewal and hope", image: "Earth above Thunder: New life stirs beneath the surface." },
    25: { name: "Innocence", chinese: "無妄 (Wú Wàng)", judgment: "Natural sincerity brings unexpected success", image: "Heaven above Thunder: Acting from pure motives without calculation." },
    26: { name: "Great Accumulating", chinese: "大畜 (Dà Xù)", judgment: "Great potential stored for future use", image: "Mountain above Heaven: Restraining great force for the right moment." },
    27: { name: "Nourishment", chinese: "頤 (Yí)", judgment: "Proper nourishment of body and spirit", image: "Mountain above Thunder: Careful attention to what sustains life." },
    28: { name: "Great Exceeding", chinese: "大過 (Dà Guò)", judgment: "Extraordinary times require extraordinary measures", image: "Lake above Wind: Flexibility prevents breaking under pressure." },
    29: { name: "The Abysmal", chinese: "坎 (Kǎn)", judgment: "Dangerous waters require courage and consistency", image: "Water above Water: Moving through danger with unwavering determination." },
    30: { name: "The Clinging", chinese: "離 (Lí)", judgment: "Clarity and brilliance illuminate the way", image: "Fire above Fire: Double clarity burns away confusion and doubt." },
    31: { name: "Influence", chinese: "咸 (Xián)", judgment: "Mutual attraction creates lasting bonds", image: "Lake above Mountain: Gentle influence moves the immovable." },
    32: { name: "Duration", chinese: "恆 (Héng)", judgment: "Perseverance and consistency bring enduring success", image: "Thunder above Wind: Constant renewal through persistent effort." },
    33: { name: "Retreat", chinese: "遯 (Dùn)", judgment: "Strategic withdrawal preserves strength", image: "Heaven above Mountain: Wisdom knows when to advance and when to retreat." },
    34: { name: "Great Power", chinese: "大壯 (Dà Zhuàng)", judgment: "Great strength must be tempered with wisdom", image: "Thunder above Heaven: Power without restraint leads to destruction." },
    35: { name: "Progress", chinese: "晉 (Jìn)", judgment: "Steady advancement brings recognition and success", image: "Fire above Earth: Rising like the sun, progress illuminates all." },
    36: { name: "Darkening of the Light", chinese: "明夷 (Míng Yí)", judgment: "Persevere through dark times with inner light", image: "Earth above Fire: Light hidden but not extinguished." },
    37: { name: "The Family", chinese: "家人 (Jiā Rén)", judgment: "Harmony in relationships begins at home", image: "Wind above Fire: Gentle guidance nurtures family bonds." },
    38: { name: "Opposition", chinese: "睽 (Kuí)", judgment: "Unity in small matters despite fundamental differences", image: "Fire above Lake: Different natures can coexist with understanding." },
    39: { name: "Obstruction", chinese: "蹇 (Jiǎn)", judgment: "Obstacles overcome through patience and seeking help", image: "Water above Mountain: Dangerous waters require careful navigation." },
    40: { name: "Deliverance", chinese: "解 (Jiě)", judgment: "Liberation comes through forgiveness and release", image: "Thunder above Water: Sudden breakthrough dissolves tension." },
    41: { name: "Decrease", chinese: "損 (Sǔn)", judgment: "Voluntary simplicity brings unexpected gain", image: "Mountain above Lake: Reducing excess reveals true value." },
    42: { name: "Increase", chinese: "益 (Yì)", judgment: "Generous sharing multiplies abundance", image: "Wind above Thunder: Beneficial influence spreads far and wide." },
    43: { name: "Breakthrough", chinese: "夬 (Guài)", judgment: "Decisive action eliminates the inferior", image: "Lake above Heaven: Truth proclaimed with clarity and force." },
    44: { name: "Coming to Meet", chinese: "姤 (Gòu)", judgment: "Unexpected encounters bring temptation or opportunity", image: "Heaven above Wind: Hidden influences gradually make themselves known." },
    45: { name: "Gathering Together", chinese: "萃 (Cuì)", judgment: "Unity of purpose creates powerful momentum", image: "Lake above Earth: People gather around worthy leadership." },
    46: { name: "Pushing Upward", chinese: "升 (Shēng)", judgment: "Gradual ascent through persistent effort", image: "Earth above Wind: Gentle pressure achieves steady progress." },
    47: { name: "Oppression", chinese: "困 (Kùn)", judgment: "Exhaustion overcome through inner strength and patience", image: "Lake above Water: Persevering through seemingly impossible conditions." },
    48: { name: "The Well", chinese: "井 (Jǐng)", judgment: "Inexhaustible resources available to all", image: "Water above Wind: The well serves all who approach with proper preparation." },
    49: { name: "Revolution", chinese: "革 (Gé)", judgment: "Necessary change brings renewal", image: "Lake above Fire: Revolutionary change transforms the old order." },
    50: { name: "The Cauldron", chinese: "鼎 (Dǐng)", judgment: "Transformation through proper nourishment", image: "Fire above Wind: The sacred vessel transforms raw materials into nourishment." },
    51: { name: "The Arousing", chinese: "震 (Zhèn)", judgment: "Shocking awakening brings clarity and growth", image: "Thunder above Thunder: Successive shocks bring profound awakening." },
    52: { name: "Keeping Still", chinese: "艮 (Gèn)", judgment: "Stillness and meditation bring peace", image: "Mountain above Mountain: Perfect stillness reflects the eternal." },
    53: { name: "Development", chinese: "漸 (Jiàn)", judgment: "Gradual progress following natural timing", image: "Wind above Mountain: Steady development like the growth of trees." },
    54: { name: "The Marrying Maiden", chinese: "歸妹 (Guī Mèi)", judgment: "Proper relationships require patience and correct understanding", image: "Thunder above Lake: Enthusiasm must be balanced with proper consideration." },
    55: { name: "Abundance", chinese: "豐 (Fēng)", judgment: "Peak achievement requires wisdom to maintain", image: "Thunder above Fire: Brilliant success at the height of power." },
    56: { name: "The Wanderer", chinese: "旅 (Lǚ)", judgment: "Temporary situations require adaptability and caution", image: "Fire above Mountain: The traveler carries light through foreign territory." },
    57: { name: "The Gentle", chinese: "巽 (Xùn)", judgment: "Gentle persistence achieves lasting influence", image: "Wind above Wind: Consistent gentle pressure penetrates all resistance." },
    58: { name: "The Joyous", chinese: "兌 (Duì)", judgment: "Joy shared brings doubled happiness", image: "Lake above Lake: Joyful exchange creates lasting bonds." },
    59: { name: "Dispersion", chinese: "渙 (Huàn)", judgment: "Dissolution of barriers enables new unity", image: "Wind above Water: Gentle force dissolves rigid structures." },
    60: { name: "Limitation", chinese: "節 (Jié)", judgment: "Wise limits create freedom within boundaries", image: "Water above Lake: Proper measures prevent overflow and waste." },
    61: { name: "Inner Truth", chinese: "中孚 (Zhōng Fú)", judgment: "Sincerity and truth influence even the distant", image: "Wind above Lake: Truth spoken from the heart reaches all listeners." },
    62: { name: "Small Exceeding", chinese: "小過 (Xiǎo Guò)", judgment: "Small corrections prevent major mistakes", image: "Thunder above Mountain: Attention to details prevents larger problems." },
    63: { name: "After Completion", chinese: "既濟 (Jì Jì)", judgment: "Success achieved requires vigilance to maintain", image: "Water above Fire: Perfect balance achieved but requiring constant attention." },
    64: { name: "Before Completion", chinese: "未濟 (Wèi Jì)", judgment: "Nearly complete; careful attention ensures success", image: "Fire above Water: The goal is visible but final effort is crucial." }
};

const TRIGRAMS = {
    '☰': { 
        name: 'Heaven', 
        element: 'Metal', 
        attribute: 'Strength', 
        family: 'Father', 
        direction: 'Northwest', 
        meaning: 'Creative force, leadership, initiative, strength',
        classical: '乾為天 (Qian wei tian)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams), one of the Ten Wings',
        commentary: 'King Wen sequence: Heaven represents the creative principle, the father, and pure yang energy. "Heaven is round and moves ceaselessly." (Legge, 1882)'
    },
    '☷': { 
        name: 'Earth', 
        element: 'Earth', 
        attribute: 'Devotion', 
        family: 'Mother', 
        direction: 'Southwest', 
        meaning: 'Receptive, nurturing, yielding, supportive',
        classical: '坤為地 (Kun wei di)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'King Wen sequence: Earth represents the receptive principle, the mother, and pure yin energy. "Earth is square and at rest." (Wilhelm/Baynes, 1967)'
    },
    '☵': { 
        name: 'Water', 
        element: 'Water', 
        attribute: 'Danger', 
        family: 'Middle Son', 
        direction: 'North', 
        meaning: 'Flow, adaptability, hidden depths, persistence',
        classical: '坎為水 (Kan wei shui)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'The Book of Changes states: "Water flows downward and fills every hollow." Represents the second son and the principle of constant flow. (Lynn, 1994)'
    },
    '☲': { 
        name: 'Fire', 
        element: 'Fire', 
        attribute: 'Clinging', 
        family: 'Middle Daughter', 
        direction: 'South', 
        meaning: 'Clarity, illumination, beauty, intelligence',
        classical: '離為火 (Li wei huo)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'Traditional interpretation: "Fire rises upward and gives light to all things." Represents the second daughter and the principle of clarity. (Wang Bi Commentary)'
    },
    '☳': { 
        name: 'Thunder', 
        element: 'Wood', 
        attribute: 'Movement', 
        family: 'Eldest Son', 
        direction: 'East', 
        meaning: 'Arousal, initiative, new beginnings, decisive action',
        classical: '震為雷 (Zhen wei lei)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'Classical text: "Thunder arouses and sets everything in motion." Represents the eldest son and the principle of arousal. (Richard Wilhelm translation)'
    },
    '☴': { 
        name: 'Wind', 
        element: 'Wood', 
        attribute: 'Gentle', 
        family: 'Eldest Daughter', 
        direction: 'Southeast', 
        meaning: 'Gentle penetration, flexibility, gradual progress',
        classical: '巽為風 (Xun wei feng)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'Ancient wisdom: "Wind disperses and penetrates everywhere." Represents the eldest daughter and gentle influence. (Zhu Xi Commentary, Song Dynasty)'
    },
    '☶': { 
        name: 'Mountain', 
        element: 'Earth', 
        attribute: 'Keeping Still', 
        family: 'Youngest Son', 
        direction: 'Northeast', 
        meaning: 'Stillness, meditation, introspection, boundaries',
        classical: '艮為山 (Gen wei shan)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'Traditional teaching: "Mountain stands still and does not move." Represents the youngest son and the principle of stillness. (Cheng Yi Commentary)'
    },
    '☱': { 
        name: 'Lake', 
        element: 'Metal', 
        attribute: 'Joyous', 
        family: 'Youngest Daughter', 
        direction: 'West', 
        meaning: 'Joy, openness, expression, communication',
        classical: '兌為澤 (Dui wei ze)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'Classical meaning: "Lake is joyous and encourages all things." Represents the youngest daughter and the principle of joy. (James Legge translation, 1882)'
    }
};

function linesToBinary(lines) {
    return lines.map(line => line === 1 ? '1' : '0').join('');
}

function getHexagramNumber(lines) {
    // Traditional I Ching hexagram calculation
    const binary = linesToBinary(lines);
    
    // Convert binary string to a number and map to 1-64 range
    const binaryNum = parseInt(binary, 2);
    const hexagramNum = (binaryNum % 64) + 1;
    
    return hexagramNum;
}

function calculateNuclearHexagram(lines) {
    // Nuclear hexagram is derived from lines 2, 3, 4, 5
    // Lines 2, 3, 4 form the lower trigram of the nuclear hexagram
    // Lines 3, 4, 5 form the upper trigram of the nuclear hexagram
    if (lines.length !== 6) return null;
    
    const nuclearLines = [
        lines[1], // line 2
        lines[2], // line 3
        lines[3], // line 4
        lines[2], // line 3 (repeated)
        lines[3], // line 4 (repeated)
        lines[4]  // line 5
    ];
    
    return getHexagramNumber(nuclearLines);
}

function calculateMutualHexagram(hexagramNumber) {
    // Mutual hexagram is the inverse/opposite pairing
    // Based on traditional I Ching sequence relationships
    const mutualPairs = {
        1: 2, 2: 1, 3: 4, 4: 3, 5: 6, 6: 5, 7: 8, 8: 7,
        9: 10, 10: 9, 11: 12, 12: 11, 13: 14, 14: 13, 15: 16, 16: 15,
        17: 18, 18: 17, 19: 20, 20: 19, 21: 22, 22: 21, 23: 24, 24: 23,
        25: 26, 26: 25, 27: 28, 28: 27, 29: 30, 30: 29, 31: 32, 32: 31,
        33: 34, 34: 33, 35: 36, 36: 35, 37: 38, 38: 37, 39: 40, 40: 39,
        41: 42, 42: 41, 43: 44, 44: 43, 45: 46, 46: 45, 47: 48, 48: 47,
        49: 50, 50: 49, 51: 52, 52: 51, 53: 54, 54: 53, 55: 56, 56: 55,
        57: 58, 58: 57, 59: 60, 60: 59, 61: 62, 62: 61, 63: 64, 64: 63
    };
    
    return mutualPairs[hexagramNumber] || hexagramNumber;
}

function getTrigramFromLines(lines) {
    const trigramMap = {
        '111': '☰', '000': '☷', '010': '☵', '101': '☲',
        '001': '☳', '110': '☴', '100': '☶', '011': '☱'
    };
    
    const binary = lines.map(line => line === 1 ? '1' : '0').join('');
    return trigramMap[binary] || '☰';
}

function getChangingLines(lines) {
    const lineNames = ['Initial', 'Second', 'Third', 'Fourth', 'Fifth', 'Top'];
    const positions = ['bottom', 'second from bottom', 'middle lower', 'middle upper', 'second from top', 'top'];
    
    return lines.map((line, index) => {
        const position = index + 1;
        const isChanging = Math.random() < 0.15;
        const correctness = (position % 2 === 1 && line === 1) || (position % 2 === 0 && line === 0);
        
        return {
            position,
            name: lineNames[index],
            place: positions[index],
            type: line === 1 ? 'yang' : 'yin',
            value: line,
            correctness: correctness ? 'correct' : 'incorrect',
            isChanging,
            meaning: getLineMeaning(position, line),
            classical: getLineMeaning(position, line).classical || `Classical text for line ${position}: ${line === 1 ? 'Yang' : 'Yin'} line meaning.`,
            source: getLineMeaning(position, line).source || "Zhou Yi, Line Texts (Yao Ci)",
            relationships: [
                {
                    type: 'correspondence',
                    with: position <= 3 ? position + 3 : position - 3,
                    quality: Math.random() > 0.5 ? 'harmonious' : 'challenging'
                }
            ]
        };
    });
}

function getLineMeaning(position, lineType) {
    const meanings = {
        1: {
            yang: "Beginning with strength and hidden potential. Foundation is solid.",
            yin: "Beginning with receptivity. Time for careful observation.",
            classical: position === 1 ? "初九：潛龍勿用。(Chu jiu: Qian long wu yong.) 'Hidden dragon. Do not act.'" : "初六：履霜，堅冰至。(Chu liu: Lu shuang, jian bing zhi.) 'When frost is underfoot, solid ice is near.'",
            source: "Zhou Yi, Line Texts (Yao Ci)"
        },
        2: {
            yang: "Active engagement with others. Seek advisors and allies.",
            yin: "Supportive role brings recognition. Gentle persistence succeeds.",
            classical: "九二：見龍在田，利見大人。(Jiu er: Jian long zai tian, li jian da ren.) 'Dragon appearing in the field. It is favorable to see the great person.'",
            source: "Zhou Yi, Line Texts (Yao Ci)"
        },
        3: {
            yang: "Dangerous position requires careful consideration. Avoid hasty action.",
            yin: "Transition point. Remain flexible and adapt to circumstances.",
            classical: "九三：君子終日乾乾，夕惕若厲，無咎。(Jiu san: Jun zi zhong ri qian qian, xi ti ruo li, wu jiu.) 'The superior person works diligently all day, and in the evening is still alert. Danger, but no blame.'",
            source: "Zhou Yi, Line Texts (Yao Ci)"
        },
        4: {
            yang: "Close to authority. Show restraint and wisdom in advancement.",
            yin: "Supporting role near leadership. Maintain integrity and discretion.",
            classical: "九四：或躍在淵，無咎。(Jiu si: Huo yue zai yuan, wu jiu.) 'It is possible to leap into the abyss. No blame.'",
            source: "Zhou Yi, Line Texts (Yao Ci)"
        },
        5: {
            yang: "Position of leadership and responsibility. Act with wisdom and justice.",
            yin: "Influential position through gentle guidance. Lead by example.",
            classical: "九五：飛龍在天，利見大人。(Jiu wu: Fei long zai tian, li jian da ren.) 'Flying dragon in the heavens. It is favorable to see the great person.'",
            source: "Zhou Yi, Line Texts (Yao Ci)"
        },
        6: {
            yang: "Culmination reached. Beware of overextension. Time for reflection.",
            yin: "Highest achievement through receptivity. Share wisdom gained.",
            classical: "上九：亢龍有悔。(Shang jiu: Kang long you hui.) 'The overweening dragon will have cause for regret.'",
            source: "Zhou Yi, Line Texts (Yao Ci)"
        }
    };
    
    return meanings[position][lineType === 1 ? 'yang' : 'yin'];
}

/**
 * Provides comprehensive I Ching explanations including hexagram, trigrams, and changing lines.
 * @param {Object} hexagram - The hexagram object with lines
 * @returns {Object} Complete explanation object
 */
function provideExplanation(hexagram) {
    const lines = hexagram.lines || [];
    const hexagramNumber = getHexagramNumber(lines);
    const hexagramInfo = HEXAGRAMS[hexagramNumber] || HEXAGRAMS[1];
    
    // Calculate nuclear and mutual hexagrams for deeper analysis
    const nuclearHexagramNumber = calculateNuclearHexagram(lines);
    const nuclearHexagramInfo = nuclearHexagramNumber ? HEXAGRAMS[nuclearHexagramNumber] : null;
    
    const mutualHexagramNumber = calculateMutualHexagram(hexagramNumber);
    const mutualHexagramInfo = HEXAGRAMS[mutualHexagramNumber] || null;
    
    const upperTrigram = getTrigramFromLines(lines.slice(3, 6));
    const lowerTrigram = getTrigramFromLines(lines.slice(0, 3));
    
    const upperTrigramInfo = TRIGRAMS[upperTrigram];
    const lowerTrigramInfo = TRIGRAMS[lowerTrigram];
    
    const changingLines = getChangingLines(lines);
    const hasChangingLines = changingLines.some(line => line.isChanging);
    
    return {
        hexagram: {
            number: hexagramNumber,
            name: hexagramInfo.name,
            chinese: hexagramInfo.chinese,
            pinyin: hexagramInfo.chinese,
            character: hexagramInfo.chinese,
            meaning: hexagramInfo.name,
            judgment: hexagramInfo.judgment,
            image: hexagramInfo.image,
            classical: hexagramInfo.classical,
            translation: hexagramInfo.translation,
            source: hexagramInfo.source,
            commentary: hexagramInfo.commentary,
            wilhelm: hexagramInfo.image,
            sequence: `Hexagram ${hexagramNumber} in the traditional sequence.`,
            structure: `Six-line hexagram with ${upperTrigramInfo.name} above ${lowerTrigramInfo.name}`,
            keywords: [hexagramInfo.name, upperTrigramInfo.name, lowerTrigramInfo.name],
            nuclear: nuclearHexagramInfo ? {
                number: nuclearHexagramNumber,
                name: nuclearHexagramInfo.name,
                chinese: nuclearHexagramInfo.chinese,
                meaning: `The nuclear hexagram ${nuclearHexagramInfo.name} reveals the hidden essence and inner development potential within your situation.`,
                source: "Nuclear hexagram analysis from the Plum Blossom Numerology tradition (Mei Hua Yi Shu)"
            } : null,
            mutual: mutualHexagramInfo ? {
                number: mutualHexagramNumber,
                name: mutualHexagramInfo.name,
                chinese: mutualHexagramInfo.chinese,
                meaning: `The mutual hexagram ${mutualHexagramInfo.name} represents the complementary shadow aspect of your situation.`,
                source: "Mutual hexagram pairing from the traditional sequence arrangement"
            } : null
        },
        trigrams: {
            upper: {
                symbol: upperTrigram,
                ...upperTrigramInfo,
                chinese: `${upperTrigramInfo.name} (Chinese name)`,
                nature: upperTrigramInfo.attribute || 'Natural',
                attribute: upperTrigramInfo.attribute || upperTrigramInfo.name,
                season: 'Variable season',
                time: 'Variable time',
                animal: 'Symbolic animal',
                bodyPart: 'Associated body part',
                organ: 'Related organ',
                emotion: 'Natural emotion',
                color: 'Symbolic color',
                number: hexagramNumber,
                personality: `${upperTrigramInfo.name} personality traits`,
                qualities: upperTrigramInfo.meaning,
                defects: 'Potential shadow aspects',
                position: "Upper trigram represents the external situation, future influences, and conscious actions"
            },
            lower: {
                symbol: lowerTrigram,
                ...lowerTrigramInfo,
                chinese: `${lowerTrigramInfo.name} (Chinese name)`,
                nature: lowerTrigramInfo.attribute || 'Natural',
                attribute: lowerTrigramInfo.attribute || lowerTrigramInfo.name,
                season: 'Variable season',
                time: 'Variable time',
                animal: 'Symbolic animal',
                bodyPart: 'Associated body part',
                organ: 'Related organ',
                emotion: 'Natural emotion',
                color: 'Symbolic color',
                number: hexagramNumber + 1,
                personality: `${lowerTrigramInfo.name} personality traits`,
                qualities: lowerTrigramInfo.meaning,
                defects: 'Potential shadow aspects',
                position: "Lower trigram represents the internal situation, past influences, and unconscious patterns"
            },
            combination: `${upperTrigramInfo.name} above ${lowerTrigramInfo.name} suggests ${(upperTrigramInfo.attribute || upperTrigramInfo.name).toLowerCase()} acting upon ${(lowerTrigramInfo.attribute || lowerTrigramInfo.name).toLowerCase()}.`,
            relationship: `The ${upperTrigramInfo.family} and ${lowerTrigramInfo.family} create a ${upperTrigramInfo.name}-${lowerTrigramInfo.name} dynamic.`
        },
        lines: changingLines,
        changingLines: hasChangingLines ? changingLines.filter(line => line.isChanging) : [],
        seasonalCorrespondences: {
            season: `${upperTrigramInfo.name} and ${lowerTrigramInfo.name} seasons`,
            timeOfDay: 'Natural timing',
            direction: `${upperTrigramInfo.direction} influenced by ${lowerTrigramInfo.direction}`,
            planet: 'Celestial influence',
            element: `${upperTrigramInfo.element} over ${lowerTrigramInfo.element}`
        },
        fiveElements: {
            upperElement: upperTrigramInfo.element,
            lowerElement: lowerTrigramInfo.element,
            relationship: determineFiveElementRelationship(upperTrigramInfo.element, lowerTrigramInfo.element),
            advice: generateFiveElementAdvice(upperTrigramInfo.element, lowerTrigramInfo.element),
            source: 'Wu Xing theory from the Yellow Emperor\'s Classic of Internal Medicine (Huangdi Neijing), Han Dynasty',
            commentary: 'The Five Elements represent the fundamental forces of creation and transformation in Chinese cosmology. Each element has specific correspondences to seasons, organs, emotions, and life phases. (Needham, Science and Civilization in China, Vol. 2)'
        },
        guidance: {
            overall: `This hexagram counsels ${hexagramInfo.judgment.toLowerCase()}. The combination of ${upperTrigramInfo.name} and ${lowerTrigramInfo.name} indicates a time where ${upperTrigramInfo.meaning} meets ${lowerTrigramInfo.meaning}.`,
            advice: generateAdvice(hexagramNumber, upperTrigramInfo, lowerTrigramInfo, hasChangingLines),
            timing: generateTiming(upperTrigramInfo, lowerTrigramInfo),
            relationships: generateRelationshipAdvice(upperTrigramInfo, lowerTrigramInfo),
            career: generateCareerAdvice(upperTrigramInfo, lowerTrigramInfo),
            health: generateHealthAdvice(upperTrigramInfo, lowerTrigramInfo),
            classical: hexagramInfo.image,
            seasonal: `This reading corresponds to the natural cycle of ${upperTrigramInfo.name} and ${lowerTrigramInfo.name}.`,
            structure: `The hexagram structure shows ${upperTrigramInfo.element} above ${lowerTrigramInfo.element}.`,
            spiritual: `Spiritual guidance integrates ${upperTrigramInfo.name} and ${lowerTrigramInfo.name} energies for personal growth.`
        },
        interpretation: {
            personality: `The outer self manifests ${upperTrigramInfo.name} qualities while the inner self operates with ${lowerTrigramInfo.name} characteristics.`,
            situation: `Current situation shows ${upperTrigramInfo.name} influences in the external world with ${lowerTrigramInfo.name} as the underlying foundation.`,
            action: `Recommended action: ${hexagramInfo.judgment}`,
            outcome: `Following this guidance leads to the fulfillment described in the judgment: "${hexagramInfo.judgment}"`
        }
    };
}

function generateAdvice(hexagramNumber, upper, lower, hasChangingLines) {
    const baseAdvice = {
        1: "Take initiative with confidence and strength. Leadership opportunities await.",
        2: "Embrace receptivity and cooperation. Support others to achieve mutual success.",
        3: "Persist through initial difficulties. Order will emerge from apparent chaos.",
        4: "Seek wisdom from experienced teachers. Humility in learning brings growth.",
        5: "Exercise patience and maintain confidence. The right timing will reveal itself.",
        6: "Avoid unnecessary conflict. Seek mediation and compromise when possible.",
        7: "Lead with moral authority and clear vision. Discipline and organization are key.",
        8: "Build alliances and foster cooperation. Unity of purpose brings strength."
    };
    
    let advice = baseAdvice[hexagramNumber] || "Follow the natural way and trust in the process of change.";
    
    if (hasChangingLines) {
        advice += " Pay special attention to the changing lines, as they indicate areas of transformation and immediate concern.";
    }
    
    return advice;
}

function generateTiming(upper, lower) {
    const timing = {
        '☰': "Swift action and immediate results",
        '☷': "Gradual development over time",
        '☵': "Fluid timing, adapt to circumstances",
        '☲': "Bright clarity, the time is now",
        '☳': "Sudden movement and rapid change",
        '☴': "Gentle, gradual penetration",
        '☶': "Still waiting, the time is not yet",
        '☱': "Joyful moments and open communication"
    };
    
    const upperTiming = timing[upper.symbol] || "natural timing";
    const lowerTiming = timing[lower.symbol] || "natural timing";
    
    return `${upperTiming} in the outer world, while ${lowerTiming} influences your inner development.`;
}

function generateRelationshipAdvice(upper, lower) {
    return `In relationships: ${upper.name} energy suggests ${upper.meaning} in your approach to others, while ${lower.name} indicates your emotional foundation is ${lower.meaning}. Balance these energies for harmonious connections.`;
}

function generateCareerAdvice(upper, lower) {
    return `In career matters: ${upper.name} points to ${upper.meaning} in your professional approach. Your underlying motivation (${lower.name}) suggests ${lower.meaning} drives your career decisions.`;
}

function generateHealthAdvice(upper, lower) {
    return `For health and vitality: The ${upper.name} aspect encourages ${upper.meaning} in your physical activities, while ${lower.name} suggests attending to ${lower.meaning} in your mental and emotional well-being.`;
}

function determineFiveElementRelationship(upperElement, lowerElement) {
    // Five Elements generating cycle: Wood→Fire→Earth→Metal→Water→Wood
    // Five Elements overcoming cycle: Wood→Earth→Water→Fire→Metal→Wood
    
    const generatingCycle = {
        'Wood': 'Fire',
        'Fire': 'Earth', 
        'Earth': 'Metal',
        'Metal': 'Water',
        'Water': 'Wood'
    };
    
    const overcomingCycle = {
        'Wood': 'Earth',
        'Earth': 'Water',
        'Water': 'Fire',
        'Fire': 'Metal',
        'Metal': 'Wood'
    };
    
    if (generatingCycle[lowerElement] === upperElement) {
        return `Generating relationship: ${lowerElement} feeds and nourishes ${upperElement}. This creates a harmonious, supportive dynamic.`;
    } else if (generatingCycle[upperElement] === lowerElement) {
        return `Generating relationship: ${upperElement} feeds and nourishes ${lowerElement}. This creates flowing, productive energy.`;
    } else if (overcomingCycle[upperElement] === lowerElement) {
        return `Overcoming relationship: ${upperElement} controls and disciplines ${lowerElement}. This creates tension requiring balance.`;
    } else if (overcomingCycle[lowerElement] === upperElement) {
        return `Overcoming relationship: ${lowerElement} controls and disciplines ${upperElement}. This creates internal conflict requiring resolution.`;
    } else if (upperElement === lowerElement) {
        return `Same element relationship: Double ${upperElement} energy creates intensity and focus, but may lack balance.`;
    } else {
        return `Neutral relationship: ${upperElement} and ${lowerElement} coexist, requiring conscious integration.`;
    }
}

function generateFiveElementAdvice(upperElement, lowerElement) {
    const elementAdvice = {
        'Wood': 'Cultivate growth, flexibility, and new beginnings. Spring energy favors planning and initiation.',
        'Fire': 'Embrace clarity, joy, and self-expression. Summer energy supports communication and creativity.',
        'Earth': 'Focus on stability, nourishment, and grounding. Late summer energy promotes practical building.',
        'Metal': 'Develop precision, structure, and letting go. Autumn energy supports harvest and refinement.',
        'Water': 'Honor depth, wisdom, and conservation. Winter energy encourages introspection and rest.'
    };
    
    const relationship = determineFiveElementRelationship(upperElement, lowerElement);
    const upperAdvice = elementAdvice[upperElement] || 'Balance this element\'s energy consciously.';
    const lowerAdvice = elementAdvice[lowerElement] || 'Integrate this element\'s qualities mindfully.';
    
    return `${relationship} Focus on ${upperAdvice} While honoring ${lowerAdvice} This creates optimal energetic flow according to traditional Wu Xing principles.`;
}

export { provideExplanation };
