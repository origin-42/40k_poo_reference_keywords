import { ten_ed } from '../assets/10th/core_rules/index';

export const findMatchingKeywords = (savedKeywords) => {
    const { rules } = ten_ed.core_rules;

    return rules.filter(item => item.keywords.some(keyword => savedKeywords.includes(keyword)));
}

