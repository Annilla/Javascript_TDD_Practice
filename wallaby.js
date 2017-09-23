module.exports = () => {
    return {
        files: [
            'src/**/*.js'
        ],
        tests: [
            'tests/**/*.js'
        ],
        env: {
            type: 'node'
        }
    }
};