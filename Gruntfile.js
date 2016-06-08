module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.initConfig({
            qunit: {
                    all: ['test/*.html']
            }
    });

    grunt.task.registerTask('test', 'A sample task that run one test.', function(testname) {
            if(!!testname)
                    grunt.config('qunit.all', ['test/' + testname + '.html']);
            grunt.task.run('qunit:all');
    });
}
