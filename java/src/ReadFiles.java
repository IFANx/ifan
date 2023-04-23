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

        for (int i = 0; i < tempList.length; i++) {
            if (tempList[i].isFile()) {
//              System.out.println("文     件：" + tempList[i]);
                files.add(tempList[i].toString());
            }
            if (tempList[i].isDirectory()) {
//              System.out.println("文件夹：" + tempList[i]);
            }
        }
        return files;
    }
}


