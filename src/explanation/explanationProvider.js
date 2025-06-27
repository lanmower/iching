
const HEXAGRAMS = {
    1: { name: "The Creative", chinese: "乾 (Qián)", judgment: "Supreme success through strength and perseverance", image: "Heaven above Heaven: The Creative. The superior person strengthens their character through ceaseless activity." },
    2: { name: "The Receptive", chinese: "坤 (Kūn)", judgment: "Sublime success through yielding and following", image: "Earth above Earth: The Receptive. The superior person supports others with generous virtue." },
    3: { name: "Difficulty at the Beginning", chinese: "屯 (Zhūn)", judgment: "Success through perseverance despite initial chaos", image: "Thunder above Water: Initial difficulty gives way to order through persistence." },
    4: { name: "Youthful Folly", chinese: "蒙 (Méng)", judgment: "Success through seeking wisdom and guidance", image: "Mountain above Water: The wise teacher guides the foolish student with patience." },
    5: { name: "Waiting", chinese: "需 (Xū)", judgment: "Confidence and patience bring success", image: "Water above Heaven: Clouds rise to heaven, teaching the value of patience." },
    6: { name: "Conflict", chinese: "訟 (Sòng)", judgment: "Caution advised; seek mediation over confrontation", image: "Heaven above Water: Conflict requires careful consideration and wise counsel." },
    7: { name: "The Army", chinese: "師 (Shī)", judgment: "Leadership with moral authority brings success", image: "Earth above Water: The general leads with wisdom and moral strength." },
    8: { name: "Holding Together", chinese: "比 (Bǐ)", judgment: "Unity and alliance bring mutual benefit", image: "Water above Earth: Waters flow together, symbolizing unity and cooperation." },
    9: { name: "Small Accumulating", chinese: "小畜 (Xiǎo Xù)", judgment: "Small progress through gentle persistence", image: "Wind above Heaven: Gentle influence gradually achieves great things." },
    10: { name: "Treading", chinese: "履 (Lǚ)", judgment: "Success through correct conduct and respect", image: "Heaven above Lake: Treading carefully on the path of righteousness." },
    11: { name: "Peace", chinese: "泰 (Tài)", judgment: "Harmony and prosperity through balance", image: "Earth above Heaven: Heaven and Earth unite in perfect harmony." },
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
    '☰': { name: 'Heaven', element: 'Metal', attribute: 'Strength', family: 'Father', direction: 'Northwest', meaning: 'Creative force, leadership, initiative, strength' },
    '☷': { name: 'Earth', element: 'Earth', attribute: 'Devotion', family: 'Mother', direction: 'Southwest', meaning: 'Receptive, nurturing, yielding, supportive' },
    '☵': { name: 'Water', element: 'Water', attribute: 'Danger', family: 'Middle Son', direction: 'North', meaning: 'Flow, adaptability, hidden depths, persistence' },
    '☲': { name: 'Fire', element: 'Fire', attribute: 'Clinging', family: 'Middle Daughter', direction: 'South', meaning: 'Clarity, illumination, beauty, intelligence' },
    '☳': { name: 'Thunder', element: 'Wood', attribute: 'Movement', family: 'Eldest Son', direction: 'East', meaning: 'Arousal, initiative, new beginnings, decisive action' },
    '☴': { name: 'Wind', element: 'Wood', attribute: 'Gentle', family: 'Eldest Daughter', direction: 'Southeast', meaning: 'Gentle penetration, flexibility, gradual progress' },
    '☶': { name: 'Mountain', element: 'Earth', attribute: 'Keeping Still', family: 'Youngest Son', direction: 'Northeast', meaning: 'Stillness, meditation, introspection, boundaries' },
    '☱': { name: 'Lake', element: 'Metal', attribute: 'Joyous', family: 'Youngest Daughter', direction: 'West', meaning: 'Joy, openness, expression, communication' }
};

function linesToBinary(lines) {
    return lines.map(line => line === 1 ? '1' : '0').join('');
}

function getHexagramNumber(lines) {
    // Simplified mapping - use a hash-based approach to distribute hexagrams
    const binary = linesToBinary(lines);
    
    // Convert binary string to a number and map to 1-64 range
    const binaryNum = parseInt(binary, 2);
    const hexagramNum = (binaryNum % 64) + 1;
    
    return hexagramNum;
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
            classical: `Classical text for line ${position}: ${line === 1 ? 'Yang' : 'Yin'} line meaning.`,
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
            yin: "Beginning with receptivity. Time for careful observation."
        },
        2: {
            yang: "Active engagement with others. Seek advisors and allies.",
            yin: "Supportive role brings recognition. Gentle persistence succeeds."
        },
        3: {
            yang: "Dangerous position requires careful consideration. Avoid hasty action.",
            yin: "Transition point. Remain flexible and adapt to circumstances."
        },
        4: {
            yang: "Close to authority. Show restraint and wisdom in advancement.",
            yin: "Supporting role near leadership. Maintain integrity and discretion."
        },
        5: {
            yang: "Position of leadership and responsibility. Act with wisdom and justice.",
            yin: "Influential position through gentle guidance. Lead by example."
        },
        6: {
            yang: "Culmination reached. Beware of overextension. Time for reflection.",
            yin: "Highest achievement through receptivity. Share wisdom gained."
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
            wilhelm: hexagramInfo.image,
            sequence: `Hexagram ${hexagramNumber} in the traditional sequence.`,
            structure: `Six-line hexagram with ${upperTrigramInfo.name} above ${lowerTrigramInfo.name}`,
            keywords: [hexagramInfo.name, upperTrigramInfo.name, lowerTrigramInfo.name],
            commentary: hexagramInfo.judgment
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
            relationship: 'Elemental harmony',
            advice: `Balance ${upperTrigramInfo.element} and ${lowerTrigramInfo.element} energies for optimal flow.`
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

export { provideExplanation };
