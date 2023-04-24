import java.io.File;
import java.util.ArrayList;

public class ReadFiles {
    public static void main(String[] args) {
        final var files = getFiles("docs/construction");
        for (String s : files
        ) {
            System.out.println(s);
        }
    }

    public static ArrayList<String> getFiles(String path) {
        ArrayList<String> files = new ArrayList<String>();
        File file = new File(path);
        File[] tempList = file.listFiles();
        return files;
    }

    public void recreateConfigFile() {
        StringBuilder sb = new StringBuilder();    //待写入字符串
        byte[] sourceByte = sourceString.getBytes();
        if (null != sourceByte) {
            try {
                File file = new File(path);        //文件路径（路径+文件名）
                if (!file.exists()) {    //文件不存在则创建文件，先创建目录
                    File dir = new File(file.getParent());
                    dir.mkdirs();
                    file.createNewFile();
                }
                FileOutputStream outStream = new FileOutputStream(file);    //文件输出流用于将数据写入文件
                outStream.write(sourceByte);
                outStream.close();    //关闭文件输出流
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    //run
    //java  java/src/ReadFiles.java
}


