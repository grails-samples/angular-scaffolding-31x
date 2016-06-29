package myblog

import grails.rest.Resource

@Resource(uri = "/post", formats = ["json"])
class Post {

    String title
    String body

    Date datePublished

    static constraints = {
    }
}
