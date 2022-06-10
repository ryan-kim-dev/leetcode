/**
당신은 제품 관리자이며 현재 새 제품을 개발하는 팀을 이끌고 있습니다. 안타깝게도 최신 버전의 제품은 품질 검사에 실패했습니다. 각 버전은 이전 버전을 기반으로 개발되기 때문에 나쁜 버전 이후의 모든 버전도 나쁜 것입니다.

n버전이 있고 첫 번째 잘못된 버전 [1, 2, ..., n]을 찾고자 한다고 가정해 보겠습니다 . 이로 인해 다음 버전이 모두 잘못됩니다.

불량 bool isBadVersion(version)여부를 반환 하는 API가 제공 됩니다. version첫 번째 잘못된 버전을 찾는 기능을 구현합니다. API에 대한 호출 수를 최소화해야 합니다.
 * Definition for isBadVersion
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;
        let end = n;
        let mid = Math.floor((start + end) / 2);
        while (start <= end) {
            if (isBadVersion(mid)) {
                end = mid - 1;
            } else if (!isBadVersion(mid)) {
                start = mid + 1;
            }
            mid = Math.floor((start + end) / 2);
        }
        return end + 1;
    };
};