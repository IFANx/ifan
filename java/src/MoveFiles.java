package utils.file;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class MoveFiles {
    public static void copy1(String a, String b) throws IOException {
        copy2(new File(a), new File(b));
    }

    public static void copy2(File file, File file1) throws IOException {
        if (!file1.exists()) {
            file1.mkdirs();
        }
        if (file.isDirectory()) {
            File[] files = file.listFiles();
            for (File file2 : files) {
                if (file2.isDirectory()) {
                    copy2(file2, new File(file1.getPath(), file2.getName()));
                } else {
                    File temp = new File(file1.getPath() + "/" + file2.getName());
                    if (temp.exists()) {
                        temp.delete();
                    } else {
                        Files.copy(file2.toPath(), Paths.get(file1.getPath() + "/" + file2.getName()));
                    }
                }
            }
        } else {
            Files.copy(file.toPath(), Paths.get(file1.getName()));
        }
    }

    public static void rename() {
        new File("resource/.vuepress/dist").renameTo(new File("resource/.vuepress/docs"));
    }

    public static void delete() {
        File docs = new File("resource/.vuepress/docs");
        if (docs.exists()) {
            docs.delete();
        }
    }

    public static void main(String[] args) throws IOException {
        rename();
        copy1("resource/.vuepress/docs", "docs");
        delete();
    }
}
