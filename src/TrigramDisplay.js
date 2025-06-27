
import React from 'react';

/**
 * Enhanced Trigram Display with Jinba ittai principles - harmonious user interaction.
 * @param {Object} props - The component props.
 * @param {Object} props.trigram - The trigram to display.
 * @param {Object} props.mousePosition - Current mouse position.
 * @param {number} props.scrollDepth - Current scroll depth (0-1).
 * @param {number} props.breathingPhase - Breathing animation phase.
 * @returns {JSX.Element} The rendered component.
 */
function TrigramDisplay({ trigram }) {
    if (!trigram || !trigram.lines) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '40px'
            }}>
                <h2 style={{ color: '#6b5b73' }}>Preparing hexagram...</h2>
            </div>
        );
    }

    // Simple styling
    const styles = {
        container: {
            padding: '30px',
            backgroundColor: '#ffffff',
            border: '1px solid #e8e8e8',
            borderRadius: '2px',
            marginBottom: '40px',
        },
        title: {
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#6b5b73',
            marginBottom: '30px',
            fontWeight: 'normal',
            fontFamily: '"Georgia", serif'
        },
        hexagramContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
        },
        lineContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '5px 0',
        },
        lineNumber: {
            fontSize: '12px',
            color: '#6b5b73',
            minWidth: '15px',
            fontFamily: '"Georgia", serif'
        },
        line: {
            height: '6px',
        },
        yangLine: {
            width: '100px',
            backgroundColor: '#2c2c2c',
        },
        yinLine: {
            width: '100px',
            display: 'flex',
            gap: '12px',
        },
        yinSegment: {
            width: '44px',
            height: '6px',
            backgroundColor: '#6b5b73',
        },
        lineLabel: {
            fontSize: '11px',
            color: '#8b5a3c',
            minWidth: '30px',
            textAlign: 'right',
            fontFamily: '"Georgia", serif'
        },
        summary: {
            marginTop: '30px',
            textAlign: 'center',
            padding: '0',
            color: '#6b5b73',
            fontSize: '0.9rem',
            fontFamily: '"Georgia", serif'
        }
    };

    const renderHexagramLine = (lineValue, index) => {
        const lineNumber = 6 - index;
        const isYang = lineValue === 1;
        
        return (
            <div key={index} style={styles.lineContainer}>
                <div style={styles.lineNumber}>{lineNumber}</div>
                
                {isYang ? (
                    <div style={{...styles.line, ...styles.yangLine}}></div>
                ) : (
                    <div style={styles.yinLine}>
                        <div style={styles.yinSegment}></div>
                        <div style={styles.yinSegment}></div>
                    </div>
                )}
                
                <div style={styles.lineLabel}>
                    {isYang ? '⚊' : '⚋'}
                </div>
            </div>
        );
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>
                Hexagram Structure
            </h2>
            
            <div style={styles.hexagramContainer}>
                {trigram.lines.map((line, index) => renderHexagramLine(line, index))}
            </div>
            
            <div style={styles.summary}>
                <em>Lines read from bottom (1) to top (6)</em>
            </div>
        </div>
    );
}
export default TrigramDisplay;
